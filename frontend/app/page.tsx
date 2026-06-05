export default function Home() {
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
      <section className="flex flex-col items-center justify-center text-center py-32">

        <h1 className="text-6xl font-bold text-green-700">
          Sustainable Shopping Made Easy
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-2xl">
          Discover eco-friendly alternatives to everyday products using AI.
          Support local businesses and reduce your environmental footprint.
        </p>

        <div className="flex gap-4 mt-10">

          <a
            href="/chatbot"
            className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700"
          >
            Start Exploring
          </a>

          <a
            href="/businesses"
            className="border border-green-600 px-8 py-4 rounded-xl hover:bg-green-100"
          >
            Local Businesses
          </a>

        </div>

      </section>

    </main>
  );
}