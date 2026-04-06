import { Card, Stat } from '@coreforge/ui';
import { AppShell } from '../../components/app-shell';

export default function DashboardPage() {
  return (
    <AppShell title="Tenant Dashboard">
      <div className="grid grid-3">
        <Card title="Requests">
          <Stat label="Last 30 days" value="120,984" />
        </Card>
        <Card title="AI Tokens">
          <Stat label="Last 30 days" value="8.1M" />
        </Card>
        <Card title="Plan">
          <Stat label="Current" value="Starter" />
        </Card>
      </div>
    </AppShell>
  );
}
