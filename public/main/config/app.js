"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const application_1 = __importDefault(require("../../main/config/environments/application"));
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
    }
    getApp() {
        return this.app;
    }
    setupEnvironment() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
        this.app.use((0, cors_1.default)());
        return this;
    }
    errorHandler(error, _req, res, _next) {
        if (application_1.default.mode !== 'development' && !!error?.statusCode) {
            return res.status(error?.statusCode ?? 400).json({
                error: error?.message ?? 'unknown',
            });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
    setupRoutes() {
        const router = express_1.default.Router();
        this.app.get('/', (_, res) => res.status(200).send('ok'));
        router.get('/', (_, res) => res.status(200).send('ok'));
        this.app.use('/api', router);
        const routesPath = path_1.default.resolve(__dirname, '../routes');
        (0, fs_1.readdirSync)(routesPath)
            .filter(file => !file.endsWith('.map'))
            .forEach(async (file) => {
            var _a;
            (await (_a = `${routesPath}/${file}`, Promise.resolve().then(() => __importStar(require(_a))))).default(router);
        });
        this.app.use(this.errorHandler.bind(this));
        return this;
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`⚡️ App listen on port ${port}.`);
        });
    }
}
exports.App = App;
exports.default = new App().setupEnvironment().setupRoutes();
