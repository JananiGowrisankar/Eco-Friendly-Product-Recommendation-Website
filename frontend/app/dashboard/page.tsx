"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call (you can replace with real backend later)
    setTimeout(() => {
      setStats({
        plasticSaved: 120,
        carbonReduction: 45,
        ecoScore: 87,
      });

      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-green-50 p-10">
        <p className="text-green-700 text-xl">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Your Sustainability Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Plastic Saved</h2>
          <p className="text-4xl text-green-600 mt-2">
            {stats.plasticSaved}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Carbon Reduction</h2>
          <p className="text-4xl text-green-600 mt-2">
            {stats.carbonReduction}kg
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Eco Score</h2>
          <p className="text-4xl text-green-600 mt-2">
            {stats.ecoScore}
          </p>
        </div>

      </div>
    </main>
  );
}