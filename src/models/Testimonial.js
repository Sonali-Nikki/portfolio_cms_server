import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  image: String,
  position: String,
});

export default mongoose.model("Testimonial", TestimonialSchema);
