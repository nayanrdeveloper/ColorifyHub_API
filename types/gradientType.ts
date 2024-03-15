import { Document } from 'mongoose';

export interface IGradient extends Document {
    gradientColor: string;
}
