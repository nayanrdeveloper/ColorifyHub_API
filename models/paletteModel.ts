import { Schema, model } from 'mongoose';
import { IPalette } from '../types/palettesType';

const PaletteSchema = new Schema({
    color1: { type: String, required: true },
    color2: { type: String, required: true },
    color3: { type: String, required: true },
    color4: { type: String, required: true },
});

export default model<IPalette>('Palette', PaletteSchema);
