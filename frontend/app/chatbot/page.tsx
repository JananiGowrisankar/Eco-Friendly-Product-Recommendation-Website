"use client";

import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };

    // add user message instantly
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wasteType: input,
          quantity: "",
          location: "",
        }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        role: "ai",
        text: data.recommendation || "No response from AI",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Backend not responding." },
      ]);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-green-50 p-6 flex flex-col items-center">

      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Eco AI Chatbot
      </h1>

      {/* Chat Box */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 flex flex-col h-[70vh]">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 p-2">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.role === "user"
                  ? "bg-green-600 text-white ml-auto"
                  : "bg-gray-200 text-black mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="text-gray-500 text-sm">
              Eco AI is thinking...
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="flex gap-2 mt-3">

          <input
            className="flex-1 border p-3 rounded-lg"
            placeholder="Ask something like: plastic bottles..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-5 rounded-lg"
          >
            Send
          </button>

        </div>
      </div>
    </main>
  );
}