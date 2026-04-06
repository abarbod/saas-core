import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { JobsService } from './jobs.service';
import { JobsProcessor } from './jobs.processor';

@Module({
  imports: [BullModule.registerQueue({ name: 'core' })],
  providers: [JobsService, JobsProcessor],
  exports: [JobsService]
})
export class JobsModule {}
