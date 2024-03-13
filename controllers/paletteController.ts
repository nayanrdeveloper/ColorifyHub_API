import { Request, Response } from 'express';
import paletteModel from '../models/paletteModel';

export const getAllPalettes = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const totalPalettes = await paletteModel.countDocuments();
        const totalPages = Math.ceil(totalPalettes / limit);

        if (page > totalPages) {
            res.status(400).json({ error: 'Invalid page number' });
        }

        const skip = (page - 1) * limit;
        const palettes = await paletteModel.find().skip(skip).limit(limit);
        res.status(200).json({
            data: { palettes },
            meta: { page, totalPages, totalRecords: totalPalettes },
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
