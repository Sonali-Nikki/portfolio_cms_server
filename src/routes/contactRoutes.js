import express from "express";
import { getContact, updateContact } from "../controllers/contactController.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/", getContact);
router.put("/", adminAuth, updateContact);

export default router;
