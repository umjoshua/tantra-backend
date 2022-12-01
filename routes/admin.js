import express from 'express';
import { getResponses } from '../controllers/responseData.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/api/:id', auth, getResponses);

export default router;