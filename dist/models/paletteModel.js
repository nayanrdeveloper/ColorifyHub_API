"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PaletteSchema = new mongoose_1.Schema({
    color1: { type: String, required: true },
    color2: { type: String, required: true },
    color3: { type: String, required: true },
    color4: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('Palette', PaletteSchema);
