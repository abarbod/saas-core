import { Injectable, Logger } from '@nestjs/common';
import { envSchema, type CoreForgeEnv } from './env.schema';

@Injectable()
export class AppConfigService {
  private readonly logger = new Logger(AppConfigService.name);
  private readonly env: CoreForgeEnv;

  constructor() {
    this.env = envSchema.parse(process.env);
    this.logger.log(`Environment validated for ${this.env.NODE_ENV}`);
  }

  get values() {
    return this.env;
  }
}
