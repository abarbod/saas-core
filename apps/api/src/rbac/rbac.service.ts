import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class RbacService {
  constructor(private readonly db: DatabaseService) {}

  async getPermissionsForMembership(membershipId: string) {
    const membership = await this.db.membership.findUnique({
      where: { id: membershipId },
      include: { role: { include: { permissions: { include: { permission: true } } } } }
    });

    return membership?.role.permissions.map((rp) => rp.permission.key) ?? [];
  }
}
