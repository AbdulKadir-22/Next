export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ border: "2px solid #ddd", padding: "1rem" }}>
      <h2>📚 Blog Section</h2>
      {children}
    </section>
  );
}