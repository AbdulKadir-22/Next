"use client";

import { useEffect, useState } from "react";

export default function ApiDemo() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  async function addPost() {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newPost }),
    });
    const data = await res.json();
    setPosts((prev) => [...prev, data]);
    setNewPost("");
  }

  return (
    <main>
      <h1>API Demo</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <input
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="New post"
      />
      <button onClick={addPost}>Add Post</button>
    </main>
  );
}
