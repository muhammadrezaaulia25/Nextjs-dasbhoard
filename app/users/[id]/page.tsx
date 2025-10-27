'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [id]);

  if (!user) return <p className="p-8">Loading user...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <h2 className="text-xl font-semibold mt-6">Posts</h2>
      <ul className="mt-2 space-y-2">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded-md dark:border-gray-700">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
