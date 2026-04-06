import type { TenantSummary, UsageSnapshot, UserSummary } from '@coreforge/types';

export interface CoreForgeSdkOptions {
  baseUrl: string;
  token?: string;
}

export class CoreForgeSdk {
  constructor(private readonly options: CoreForgeSdkOptions) {}

  private async request<T>(path: string): Promise<T> {
    const response = await fetch(`${this.options.baseUrl}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(this.options.token ? { Authorization: `Bearer ${this.options.token}` } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`CoreForge SDK error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  getHealth() {
    return this.request<{ status: string; timestamp: string }>('/api/v1/health');
  }

  listTenants() {
    return this.request<TenantSummary[]>('/api/v1/admin/tenants');
  }

  listUsers() {
    return this.request<UserSummary[]>('/api/v1/admin/users');
  }

  getUsageOverview() {
    return this.request<UsageSnapshot[]>('/api/v1/admin/usage');
  }
}
