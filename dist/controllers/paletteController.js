'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getAllPalettes = void 0;
const paletteModel_1 = __importDefault(require('../models/paletteModel'));
const getAllPalettes = (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const totalPalettes = yield paletteModel_1.default.countDocuments();
            const totalPages = Math.ceil(totalPalettes / limit);
            if (page > totalPages) {
                res.status(400).json({ error: 'Invalid page number' });
            }
            const skip = (page - 1) * limit;
            const palettes = yield paletteModel_1.default.find().skip(skip).limit(limit);
            res.status(200).json({
                data: { palettes },
                meta: { page, totalPages, totalRecords: totalPalettes },
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
exports.getAllPalettes = getAllPalettes;
