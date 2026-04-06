import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class JobsService {
  constructor(@InjectQueue('core') private readonly queue: Queue) {}

  async enqueueAuditDigest(tenantId: string) {
    await this.queue.add(
      'audit-digest',
      { tenantId },
      {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000
        },
        jobId: `audit-digest:${tenantId}:${new Date().toISOString().slice(0, 10)}`
      }
    );
  }
}
