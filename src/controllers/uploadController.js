export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;

  res.json({
    success: true,
    url: fileUrl
  });
};
