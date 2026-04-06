import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuditService {
  constructor(private readonly db: DatabaseService) {}

  log(actorUserId: string | null, action: string, tenantId?: string, metadata?: object) {
    return this.db.auditLog.create({
      data: {
        actorUserId,
        action,
        tenantId,
        metadata: metadata ?? {}
      }
    });
  }
}
