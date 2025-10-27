'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: any) => (
          <div key={user.id} className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h2 className="font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <a href={`/users/${user.id}`} className="text-blue-500 underline text-sm">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
            }
