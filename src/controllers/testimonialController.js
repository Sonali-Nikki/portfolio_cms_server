import Testimonial from "../models/Testimonial.js";

export const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
};

export const createTestimonial = async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.json(testimonial);
};

export const updateTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(testimonial);
};

export const deleteTestimonial = async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: "Testimonial deleted" });
};
