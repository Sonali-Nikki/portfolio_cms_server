import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  github: String,
  demo: String,
  techStack: [String],
});

export default mongoose.model("Project", ProjectSchema);
