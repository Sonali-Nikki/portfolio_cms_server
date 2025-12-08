import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
});

export default mongoose.model("About", AboutSchema);
