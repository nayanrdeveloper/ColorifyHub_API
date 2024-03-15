"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGradients = void 0;
const gradientModel_1 = __importDefault(require("../models/gradientModel"));
const getAllGradients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const totalGradients = yield gradientModel_1.default.countDocuments();
        const totalPages = Math.ceil(totalGradients / limit);
        if (page > totalPages) {
            res.status(400).json({ error: 'Invalid page number' });
        }
        const skip = (page - 1) * limit;
        const gradeints = yield gradientModel_1.default.find().skip(skip).limit(limit);
        res.status(200).json({
            gradeints: gradeints,
            meta: { page, totalPages, totalRecords: totalGradients },
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllGradients = getAllGradients;
