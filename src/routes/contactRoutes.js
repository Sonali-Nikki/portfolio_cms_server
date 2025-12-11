import express from "express";
import { createContact, getContacts, deleteContact } from "../controllers/contactController.js";

const router = express.Router();

// Public route — user contact form
router.post("/", createContact);

// Admin routes
router.get("/", getContacts);
router.delete("/:id", deleteContact);

export default router;
