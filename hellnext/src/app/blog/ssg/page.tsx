
export default async function BlogSSG() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // default, pre-rendered at build
  });
  const posts = await res.json();

  return (
    <main>
      <h1>SSG Blog Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
