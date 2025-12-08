import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
});

export default mongoose.model("Service", ServiceSchema);
