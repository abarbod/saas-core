import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from '../database/database.service';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService, private readonly jwt: JwtService) {}

  async register(input: RegisterDto) {
    const passwordHash = await bcrypt.hash(input.password, 10);
    const user = await this.db.user.create({
      data: { email: input.email, passwordHash, displayName: input.displayName }
    });

    return { id: user.id, email: user.email };
  }

  async login(input: LoginDto) {
    const user = await this.db.user.findUnique({ where: { email: input.email } });
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: await this.jwt.signAsync({ sub: user.id, email: user.email }),
      user: { id: user.id, email: user.email, displayName: user.displayName }
    };
  }
}
