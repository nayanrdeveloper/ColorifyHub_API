import { Request, Response } from 'express';
import paletteModel from '../models/paletteModel';

export const getAllPalettes = async (req: Request, res: Response): Promise<void> => {
    try {
        const palettes = await paletteModel.find();
        res.status(200).json(palettes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
