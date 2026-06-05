export default function Chatbot() {
  return (
    <main className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Eco AI Assistant
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-3xl">

        <p className="font-semibold mb-4">
          Ask about eco-friendly alternatives:
        </p>

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="I use plastic water bottles..."
        />

        <button
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Analyze
        </button>

      </div>

    </main>
  );
}