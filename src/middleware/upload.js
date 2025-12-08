import multer from "multer";
import path from "path";

// storage location + file name setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // save files to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// Allow only images
function fileFilter(req, file, cb) {
  const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images allowed"), false);
  }
}

export const upload = multer({ storage, fileFilter });
