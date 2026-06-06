"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BusinessDetail() {
  const { id } = useParams();
  const [business, setBusiness] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch(`http://localhost:5000/api/businesses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch business");
        return res.json();
      })
      .then(setBusiness)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) {
    return <p className="p-10 text-red-600">{error}</p>;
  }

  if (!business) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-green-50 p-10">

      <div className="bg-white p-6 rounded shadow max-w-xl">

        <h1 className="text-2xl font-bold text-green-700">
          {business.name}
        </h1>

        <p className="mt-2 text-gray-600">{business.type}</p>
        <p className="mt-1 text-gray-500">{business.location}</p>

        <hr className="my-4" />

        <p>{business.description}</p>

        <p className="mt-4 font-semibold">
          Contact: {business.contact}
        </p>

      </div>

    </div>
  );
}