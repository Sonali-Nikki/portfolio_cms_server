import express from "express";
import { getAbout, updateAbout } from "../controllers/aboutController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAbout);
router.put("/", authMiddleware, updateAbout);

export default router;
