import { NextResponse } from "next/server";

let posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

// GET -> return all posts
export async function GET() {
  return NextResponse.json(posts);
}

// POST -> add a new post
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = { id: posts.length + 1, title: body.title };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
