import express from 'express';
import { getExperience,createExperience,updateExperience,deleteExperience } from '../controllers/experienceController.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();    

router.get('/', getExperience);
router.post('/', authMiddleware, createExperience);
router.put('/:id', authMiddleware, updateExperience);
router.delete('/:id', authMiddleware, deleteExperience);      

export default router;