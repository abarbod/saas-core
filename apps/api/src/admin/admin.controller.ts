import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly admin: AdminService) {}

  @Get('tenants')
  tenants() {
    return this.admin.listTenants();
  }

  @Get('users')
  users() {
    return this.admin.listUsers();
  }

  @Get('usage')
  usage() {
    return this.admin.usageOverview();
  }

  @Get('health')
  health() {
    return this.admin.systemHealth();
  }
}
