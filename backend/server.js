const express = require("express");
const cors = require("cors");

const app = express();
const jwt = require("jsonwebtoken");

const SECRET_KEY = "ecowise_secret";

const users = [
  {
    id: 1,
    email: "eco@business.com",
    password: "123456789" // we’ll simplify below
  }
];
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user || password !== "123456789") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
app.get("/api/businesses", authMiddleware, (req, res) => {
  res.json(businesses);
});
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

function normalizeWasteType(input) {
  if (!input) return "unknown";

  input = input.toLowerCase().trim();

  if (input.includes("plastic")) return "plastic";
  if (input.includes("paper") || input.includes("cardboard")) return "paper";
  if (input.includes("glass")) return "glass";
  if (input.includes("metal") || input.includes("aluminium") || input.includes("steel")) return "metal";
  if (input.includes("organic") || input.includes("food") || input.includes("waste")) return "organic";

  return "unknown";
}
const businesses = [
  {
    id: 1,
    name: "Chennai Recycling Centre",
    type: "Recycling",
    location: "Guindy",
    description: "Handles plastic, paper, and metal recycling efficiently.",
    contact: "9876543210"
  },
  {
    id: 2,
    name: "Green Earth Waste Solutions",
    type: "Waste Management",
    location: "Anna Nagar",
    description: "Eco-friendly waste collection and segregation services.",
    contact: "9123456780"
  },
  {
    id: 3,
    name: "Eco Scrap Dealers",
    type: "Scrap Recycling",
    location: "T Nagar",
    description: "Buys and processes metal scrap materials.",
    contact: "9988776655"
  },
  {
    id: 4,
    name: "Organic Compost Hub",
    type: "Composting",
    location: "Velachery",
    description: "Turns organic waste into compost and fertilizer.",
    contact: "9012345678"
  }
];

app.get("/api/businesses", (req, res) => {
  res.json(businesses);
});

app.get("/api/businesses/:id", (req, res) => {
  const id = Number(req.params.id);

if (isNaN(id)) {
  return res.status(400).json({ message: "Invalid business ID" });
}
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return res.status(404).json({ message: "Business not found" });
  }

  res.json(business);
});
app.get("/", (req, res) => {
  res.send("Eco System Running");
});

app.post("/api/recommend", (req, res) => {
  let { wasteType = "", quantity = "", location = "" } = req.body;
wasteType = normalizeWasteType(wasteType);
  let recommendations = {
    plastic: [
      "Send to nearest recycling center ♻️",
      "Convert into eco-bricks if possible",
      "Avoid burning plastic waste"
    ],
    paper: [
      "Reuse for drafts or notes 📄",
      "Send for recycling collection",
      "Compost uncoated paper"
    ],
    glass: [
      "Reuse glass containers 🫙",
      "Send to glass recycling plants",
      "Avoid mixing with general waste"
    ],
    metal: [
      "Sell to scrap collectors ⚙️",
      "Send to metal recycling units",
      "Separate aluminium and steel"
    ],
    organic: [
      "Compost at home 🌱",
      "Use for biogas production",
      "Avoid plastic contamination"
    ],
    unknown: [
      "Please specify waste type clearly",
      "Try: plastic, paper, glass, metal, organic",
      "Sort waste before disposal"
    ]
  };

  const fallback = [
    "Sort waste properly before disposal",
    "Contact local recycling center",
    "Follow municipal waste guidelines"
  ];

  const response =
  recommendations[wasteType]
    ? recommendations[wasteType][Math.floor(Math.random() * recommendations[wasteType].length)]
    : fallback[Math.floor(Math.random() * fallback.length)];
  res.json({
    recommendation: response,
    location,
    quantity
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));