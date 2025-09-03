import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 * 60, // ✅ 1 min: data stays "fresh"
    cacheTime: 1000 * 60 * 5, // ✅ 5 min: data stays in cache
    refetchOnWindowFocus: true,   // 🔄 auto refetch when user refocuses
    keepPreviousData: true,       // 👌 prevents flicker on page change
  });

  if (isLoading) return <p className="text-gray-600">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Posts (Page {page})</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </div>

      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold text-indigo-700">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}