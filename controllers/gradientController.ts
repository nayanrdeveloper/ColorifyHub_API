import { Request, Response } from 'express';
import gradientModel from '../models/gradientModel';

export const getAllGradients = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const totalGradients = await gradientModel.countDocuments();
        const totalPages = Math.ceil(totalGradients / limit);

        if (page > totalPages) {
            res.status(400).json({ error: 'Invalid page number' });
        }

        const skip = (page - 1) * limit;
        const gradeints = await gradientModel.find().skip(skip).limit(limit);
        res.status(200).json({
            gradeints: gradeints,
            meta: { page, totalPages, totalRecords: totalGradients },
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
