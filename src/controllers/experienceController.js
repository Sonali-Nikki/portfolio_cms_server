import Experience from "../models/Experience.js";

export const getExperience = async (req, res) => {
  const experience = await Experience.find();
  res.json(experience);
};

export const createExperience = async (req, res) => {
  const experience = await Experience.create(req.body);
  res.json(experience);
};

export const updateExperience = async (req, res) => {
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(experience);
};

export const deleteExperience = async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: "Experience deleted" });
};
