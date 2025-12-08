import express from "express";
import authRoutes from "./auth.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Portfolio CMS API is running..." });
});

export default router;
