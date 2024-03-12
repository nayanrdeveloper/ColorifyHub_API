"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paletteController_1 = require("../controllers/paletteController");
const router = (0, express_1.Router)();
router.get('/palettes', paletteController_1.getAllPalettes);
exports.default = router;
