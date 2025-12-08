import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String,
});

export default mongoose.model("Experience", ExperienceSchema);
