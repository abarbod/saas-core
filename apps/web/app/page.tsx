import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="layout grid">
      <h1>CoreForge</h1>
      <p>AI-ready SaaS core operating system for real production products.</p>
      <nav className="nav">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
        <Link href="/app">Dashboard</Link>
        <Link href="/admin">Super Admin</Link>
      </nav>
    </main>
  );
}
