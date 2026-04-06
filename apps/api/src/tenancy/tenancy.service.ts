import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TenancyService {
  constructor(private readonly db: DatabaseService) {}

  async listTenants() {
    return this.db.tenant.findMany({ include: { memberships: true } });
  }

  async resolveTenantOrThrow(tenantId: string) {
    const tenant = await this.db.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant) throw new NotFoundException('Tenant not found');
    return tenant;
  }
}
