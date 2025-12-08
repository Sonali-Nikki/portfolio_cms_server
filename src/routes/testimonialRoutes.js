import express from 'express';
import { getTestimonials,createTestimonial,updateTestimonial,deleteTestimonial } from '../controllers/testimonialController.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getTestimonials);
router.post('/', authMiddleware, createTestimonial);
router.put('/:id', authMiddleware, updateTestimonial);
router.delete('/:id', authMiddleware, deleteTestimonial);       

export default router;