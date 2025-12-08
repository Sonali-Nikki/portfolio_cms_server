import express from 'express';
import { getAll, createItem,updateItem, deleteItem } from '../controllers/blogController.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();        

router.get("/", getAll);
router.post("/", authMiddleware, createItem);
router.put("/:id", authMiddleware, updateItem);
router.delete("/:id", authMiddleware, deleteItem);

export default router;