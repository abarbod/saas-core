import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AdminService {
  constructor(private readonly db: DatabaseService) {}

  listTenants() {
    return this.db.tenant.findMany({
      include: { _count: { select: { memberships: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }

  listUsers() {
    return this.db.user.findMany({ orderBy: { createdAt: 'desc' }, take: 100 });
  }

  usageOverview() {
    return this.db.usageRecord.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  }

  systemHealth() {
    return {
      queue: 'connected',
      storage: 'ready',
      status: 'nominal',
      generatedAt: new Date().toISOString()
    };
  }
}
