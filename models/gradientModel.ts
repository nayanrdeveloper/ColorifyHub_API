import { Schema, model } from 'mongoose';
import { IGradient } from '../types/gradientType';

const GradientSchema = new Schema({
    gradientColor: { type: String, required: true },
});

export default model<IGradient>('Gradient', GradientSchema);
