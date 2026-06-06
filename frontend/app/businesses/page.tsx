"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Businesses() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      router.push("/login");
      return;
    }

    fetch("http://localhost:5000/api/businesses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700">
        Eco Businesses Dashboard
      </h1>

      <p className="mt-4">
        List of eco-friendly partner businesses will appear here.
      </p>

      {/* DISPLAY DATA */}
      <div className="mt-6 grid gap-4">
        {data.map((b: any) => (
          <div key={b.id} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold text-green-700">{b.name}</h2>
            <p>{b.type}</p>
            <p className="text-gray-500">{b.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}