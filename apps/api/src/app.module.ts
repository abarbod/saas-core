import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { TenancyModule } from './tenancy/tenancy.module';
import { RbacModule } from './rbac/rbac.module';
import { BillingModule } from './billing/billing.module';
import { UsageModule } from './usage/usage.module';
import { AuditModule } from './audit/audit.module';
import { JobsModule } from './jobs/jobs.module';
import { EventsModule } from './events/events.module';
import { StorageModule } from './storage/storage.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST ?? 'localhost',
        port: Number(process.env.REDIS_PORT ?? 6379)
      }
    }),
    AppConfigModule,
    DatabaseModule,
    HealthModule,
    AuthModule,
    TenancyModule,
    RbacModule,
    BillingModule,
    UsageModule,
    AuditModule,
    JobsModule,
    EventsModule,
    StorageModule,
    AdminModule
  ]
})
export class AppModule {}
