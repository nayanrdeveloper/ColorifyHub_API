import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import paletteRoute from './routes/paletteroute';
import gradientRoute from './routes/gradientRoute';
import { errorHandler } from './middlewares/errorMiddlewares';
import connectToDatabase from './config/databaseConfig';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/api', paletteRoute);
app.use('/api', gradientRoute);

const PORT: number = parseInt(process.env.PORT || '4000', 10);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectToDatabase();
