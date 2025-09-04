"use client";

import { useQuery } from "@tanstack/react-query";

export default function ClientReactQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  return (
    <main>
      <h1>Client Fetching with React Query</h1>
      <ul>
        {data.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
