const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "database-1.c748sswmyo2q.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "hospital"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to RDS database");
  }
});

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hospital Backend Running");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/api/doctors", (req, res) => {
  res.json([
    { id: 1, name: "Dr. Sharma", department: "Cardiology" },
    { id: 2, name: "Dr. Patel", department: "Orthopedics" }
  ]);
});

app.post("/api/appointments", (req, res) => {
  const { name, email, phone, department, date } = req.body;

  console.log("New Appointment Received:", req.body);

  const query = `
    INSERT INTO appointments (name, email, phone, department, date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [name, email, phone, department, date], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }

    res.json({
      message: "Appointment saved to database"
    });
  });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
