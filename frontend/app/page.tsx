"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [wasteType, setWasteType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wasteType, quantity, location }),
    });

    const data = await res.json();
    setResult(data.recommendation);
  } catch (err) {
    setResult("Backend not responding.");
  }

  setLoading(false);
};
  return (
    <main className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow">

        <h1 className="text-2xl font-bold text-green-700">
          🌱 EcoChoice AI
        </h1>

        <div className="flex gap-6">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="/chatbot" className="hover:text-green-600">AI Chat</a>
          <a href="/businesses" className="hover:text-green-600">Businesses</a>
          <a href="/dashboard" className="hover:text-green-600">Dashboard</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16">

        <h1 className="text-5xl font-bold text-green-700">
          Sustainable Shopping Made Easy
        </h1>

        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Discover eco-friendly alternatives and manage waste intelligently using AI.
        </p>

        {/* Input Form */}
        <div className="bg-white shadow-xl rounded-xl p-6 mt-10 w-96">

          <input
            className="w-full border p-2 mb-3"
            placeholder="Waste Type (Plastic, Paper...)"
            onChange={(e) => setWasteType(e.target.value)}
          />

          <input
            className="w-full border p-2 mb-3"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <input
            className="w-full border p-2 mb-3"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
  onClick={handleSubmit}
  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
>
  {loading ? "Analyzing Waste..." : "Get Recommendation"}
</button>

        </div>

        {/* Result */}
        {result && (
          <div className="bg-white mt-6 p-4 rounded shadow-md w-96">
            <h2 className="font-bold text-green-700">Recommendation</h2>
            <p>{result}</p>
          </div>
        )}

      </section>

    </main>
  );
}