import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h2>Welcome Home</h2>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/blog/nextjs-rocks">Dynamic Blog</Link></li>
        </ul>
      </nav>
    </main>
  );
}