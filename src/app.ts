import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import paletteRoute from '../src/routes/paletteroute';
import mongoose from 'mongoose';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api', paletteRoute);

mongoose
    .connect(process.env.MONGODB_URI || '', {})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log(`Server is running on port ${3000}`);
        });
    })
    .catch(error => console.error(error));
