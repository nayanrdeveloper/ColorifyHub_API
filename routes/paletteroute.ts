import { Router } from 'express';
import { getAllPalettes } from '../controllers/paletteController';

const router = Router();

router.get('/palettes', getAllPalettes);

export default router;
