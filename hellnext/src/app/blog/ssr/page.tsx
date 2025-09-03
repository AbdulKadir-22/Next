
export const dynamic = "force-dynamic"; // forces SSR

export default async function BlogSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // SSR: no caching
  });
  const posts = await res.json();

  return (
    <main>
      <h1>SSR Blog Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
