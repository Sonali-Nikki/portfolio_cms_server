// import dotenv from "dotenv";
// import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";


export async function seedAdmin() {
  try {
    const existingAdmin = await User.findOne({ role: "user" });

    if (existingAdmin) {
      console.log("User already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("Admin123", 10);

    const admin = new User({
      name: "User Name",
      email: "user@example.com",
      password: hashedPassword,
      role: "user",
    });

    await admin.save();
    console.log("User created successfully!");
    
  } catch (err) {
    console.error("Error seeding user:", err);
  }
}

