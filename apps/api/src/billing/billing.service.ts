import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BillingService {
  constructor(private readonly db: DatabaseService) {}

  listPlans() {
    return this.db.plan.findMany({ orderBy: { monthlyPriceCents: 'asc' } });
  }

  listSubscriptions() {
    return this.db.subscription.findMany();
  }
}
