import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('core')
export class JobsProcessor extends WorkerHost {
  async process(job: Job<{ tenantId: string }>) {
    if (job.name === 'audit-digest') {
      return { ok: true, tenantId: job.data.tenantId };
    }

    return { ignored: job.name };
  }
}
