import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Nested Routes in Action" },
  { id: 3, title: "Dynamic Routing Explained" },
];

export default function Blog() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Blog</h2>
      <ul className="list-disc pl-6 mt-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
