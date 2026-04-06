export type EntityId = string;

export type TenantStatus = 'active' | 'suspended' | 'trial';

export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface TenantSummary {
  id: EntityId;
  name: string;
  status: TenantStatus;
  memberCount: number;
}

export interface UserSummary {
  id: EntityId;
  email: string;
  displayName: string;
}

export interface UsageSnapshot {
  tenantId: EntityId;
  period: string;
  requests: number;
  aiTokens: number;
}
