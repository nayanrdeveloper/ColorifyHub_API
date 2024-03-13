import { Document } from 'mongoose';

export interface IPalette extends Document {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
}
