
// app/blog/[id]/page.tsx
interface Props {
  params: { id: string }
}

export default function BlogPost({ params }: Props) {
  return <h1>Blog Post: {params.id}</h1>;
}