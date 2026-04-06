import { AppShell } from '../../components/app-shell';

export default function AdminPage() {
  return (
    <AppShell title="Super Admin">
      <div className="grid grid-3">
        <section className="card"><h3>Tenants</h3><p>List, status, and risk markers.</p></section>
        <section className="card"><h3>Users</h3><p>User overview and support context.</p></section>
        <section className="card"><h3>Usage</h3><p>Cross-tenant usage and health signals.</p></section>
      </div>
      <section className="card"><h3>System Health</h3><p>Queue, storage, and API diagnostics placeholder.</p></section>
    </AppShell>
  );
}
