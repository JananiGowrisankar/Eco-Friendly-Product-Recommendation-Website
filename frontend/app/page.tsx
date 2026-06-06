"use client";

import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [wasteType, setWasteType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

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

    setHistory((prev) => [...prev, data.recommendation]);

  } catch (err) {
    setResult("Backend not responding.");
  }

  setLoading(false);
};
  return (
    <main className="min-h-screen bg-green-50">

      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-10 py-6 flex justify-between items-center">

        <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
          🌱 EcoWise AI
        </h1>

        <div className="flex gap-10 text-lg font-semibold">

          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/chatbot" className="hover:text-green-600 transition">
            AI Chat
          </Link>

          <Link href="/businesses" className="hover:text-green-600 transition">
            Businesses
          </Link>

          <Link href="/dashboard" className="hover:text-green-600 transition">
            Dashboard
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6">

        <h1 className="text-6xl font-extrabold text-green-700 leading-tight">
          Sustainable Choices <br /> Made Simple 🌍
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
          Discover eco-friendly alternatives, manage waste smarter, and connect
          with green businesses using AI.
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <Link
            href="/chatbot"
            className="bg-green-600 text-white text-lg px-8 py-4 rounded-2xl shadow hover:bg-green-700 transition"
          >
            Start AI Chat 🤖
          </Link>

          <Link
            href="/businesses"
            className="border-2 border-green-600 text-green-700 text-lg px-8 py-4 rounded-2xl hover:bg-green-100 transition"
          >
            Explore Businesses 🏢
          </Link>

        </div>

      </section>

    </main>
  );
}