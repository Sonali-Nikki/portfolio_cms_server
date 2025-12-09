import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedAdmin } from "../../seedAdmin.js";
dotenv.config();

export const connectDB = async () => {
  try {
    // console.log("MONGO_URL:", process.env.MONGO_URL); 
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
    await seedAdmin();
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }
};
