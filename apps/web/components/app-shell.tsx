import Link from 'next/link';
import type { ReactNode } from 'react';

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="layout grid">
      <header className="grid">
        <h1>{title}</h1>
        <nav className="nav">
          <Link href="/app">Home</Link>
          <Link href="/app/settings">Settings</Link>
          <Link href="/admin">Super Admin</Link>
        </nav>
      </header>
      {children}
    </main>
  );
}
