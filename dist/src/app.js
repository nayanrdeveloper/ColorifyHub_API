"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const paletteroute_1 = __importDefault(require("../src/routes/paletteroute"));
const errorMiddlewares_1 = require("./middlewares/errorMiddlewares");
const databaseConfig_1 = __importDefault(require("./config/databaseConfig"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(errorMiddlewares_1.errorHandler);
app.use('/api', paletteroute_1.default);
const PORT = parseInt(process.env.PORT || '4000', 10);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
(0, databaseConfig_1.default)();
