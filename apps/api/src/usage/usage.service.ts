import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsageService {
  constructor(private readonly db: DatabaseService) {}

  async recordUsage(tenantId: string, metric: string, value: number) {
    return this.db.usageRecord.create({
      data: {
        tenantId,
        metric,
        value,
        period: new Date().toISOString().slice(0, 7)
      }
    });
  }

  getOverview() {
    return this.db.usageRecord.findMany({ take: 100, orderBy: { createdAt: 'desc' } });
  }
}
