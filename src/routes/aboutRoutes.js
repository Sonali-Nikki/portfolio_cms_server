import express from "express";
import { getAbout, updateAbout } from "../controllers/aboutController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("ABOUT ROUTE WORKING");
});


router.get("/", getAbout);
router.put("/", authMiddleware, updateAbout);

export default router;
