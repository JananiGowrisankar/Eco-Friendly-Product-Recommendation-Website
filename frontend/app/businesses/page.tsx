export default function Businesses() {
  return (
    <main className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-10">
        Local Eco Businesses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Green Earth Store
          </h2>
          <p className="mt-2">
            Bamboo products & reusable items
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            EcoKart
          </h2>
          <p className="mt-2">
            Sustainable household products
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Nature Living
          </h2>
          <p className="mt-2">
            Organic and eco-friendly goods
          </p>
        </div>

      </div>

    </main>
  );
}