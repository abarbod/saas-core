import { Controller, Get } from '@nestjs/common';
import { TenancyService } from './tenancy.service';

@Controller('tenants')
export class TenancyController {
  constructor(private readonly tenancy: TenancyService) {}

  @Get()
  listTenants() {
    return this.tenancy.listTenants();
  }
}
