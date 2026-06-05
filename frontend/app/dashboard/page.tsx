export default function Dashboard() {
  return (
    <main className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Your Sustainability Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Plastic Saved</h2>
          <p className="text-4xl text-green-600 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Carbon Reduction</h2>
          <p className="text-4xl text-green-600 mt-2">45kg</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Eco Score</h2>
          <p className="text-4xl text-green-600 mt-2">87</p>
        </div>

      </div>

    </main>
  );
}