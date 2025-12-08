import Model from "../models/Blog.js";

// GET ALL
export const getAll = async (req, res) => {
  const items = await Model.find();
  res.json(items);
};

// CREATE
export const createItem = async (req, res) => {
  const item = await Model.create(req.body);
  res.json(item);
};

// UPDATE
export const updateItem = async (req, res) => {
  const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

// DELETE
export const deleteItem = async (req, res) => {
  await Model.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};