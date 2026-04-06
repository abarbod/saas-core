import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from '../config/config.service';

@Controller('health')
export class HealthController {
  constructor(private readonly config: AppConfigService) {}

  @Get()
  getHealth() {
    return {
      status: 'ok',
      env: this.config.values.NODE_ENV,
      timestamp: new Date().toISOString()
    };
  }
}
