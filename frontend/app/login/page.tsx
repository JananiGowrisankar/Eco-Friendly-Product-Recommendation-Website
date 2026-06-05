"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    alert("Invalid login");
    return;
  }

  const data = await res.json();

  localStorage.setItem("token", data.token);

  router.push("/businesses");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Business Login
        </h1>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}