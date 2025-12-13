import express from "express";
import { getContact, updateContact } from "../controllers/contactController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getContact);
router.put("/", authMiddleware, updateContact);

export default router;
