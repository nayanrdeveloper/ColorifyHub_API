import { Router } from 'express';
import { getAllGradients } from '../controllers/gradientController';

const router = Router();

router.get('/gradients', getAllGradients);

export default router;
