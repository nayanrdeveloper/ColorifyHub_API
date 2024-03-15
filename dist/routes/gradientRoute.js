"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradientController_1 = require("../controllers/gradientController");
const router = (0, express_1.Router)();
router.get('/gradients', gradientController_1.getAllGradients);
exports.default = router;
