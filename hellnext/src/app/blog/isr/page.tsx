export const revalidate = 10; // revalidates every 10 seconds

export default async function BlogISR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main>
      <h1>ISR Blog Posts (revalidates every 10s)</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
