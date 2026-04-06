import type { ReactNode } from 'react';

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ border: '1px solid #333', borderRadius: 10, padding: 16 }}>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

export function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ display: 'grid', gap: 4 }}>
      <span style={{ fontSize: 12, opacity: 0.75 }}>{label}</span>
      <strong style={{ fontSize: 20 }}>{value}</strong>
    </div>
  );
}
