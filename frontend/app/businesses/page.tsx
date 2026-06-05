"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Businesses() {
  const router = useRouter();

  useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("http://localhost:5000/api/login", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(setData);
}, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700">
        Eco Businesses Dashboard
      </h1>

      <p className="mt-4">
        List of eco-friendly partner businesses will appear here.
      </p>
    </div>
  );
}