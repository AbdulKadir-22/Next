"use client";

import { useEffect, useState } from "react";

export default function ClientUseEffect() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 5));
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Client Fetching with useEffect</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
