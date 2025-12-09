import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";

// Load env
dotenv.config();

// MongoDB connection
// const MONGO_URI = process.env.MONGO_URL

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

const users = [
  {
    name: "Admin One",
    email: "admin1@example.com",
    password: "Admin123",
    role: "admin",
  },
  {
    name: "Admin Two",
    email: "admin2@example.com",
    password: "Admin123",
    role: "admin",
  },
  {
    name: "User One",
    email: "user1@example.com",
    password: "User123",
    role: "user",
  },
  {
    name: "User Two",
    email: "user2@example.com",
    password: "User123",
    role: "user",
  },
];

export async function seedAdmin() {
  try {
    for (let u of users) {
      const existing = await User.findOne({ email: u.email });
      if (existing) {
        console.log(`${u.email} already exists, skipping.`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(u.password, 10);

      const user = new User({
        name: u.name,
        email: u.email,
        password: hashedPassword,
        role: u.role,
      });

      await user.save();
      console.log(`${u.email} created successfully!`);
    }
    console.log("Seeding completed.");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
}


