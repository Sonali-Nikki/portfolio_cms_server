import About from "../models/About.js";

// GET
export const getAbout = async (req, res) => {
  const about = await About.findOne();
  res.json(about);
};

// UPDATE or CREATE
export const updateAbout = async (req, res) => {
  const data = req.body;
  let about = await About.findOne();

  if (about) {
    about = await About.findByIdAndUpdate(about._id, data, { new: true });
  } else {
    about = await About.create(data);
  }

  res.json(about);
};
