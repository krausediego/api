"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_1 = __importDefault(require("../../main/config/environments/token"));
class Token {
    generateToken(user) {
        return jsonwebtoken_1.default.sign(user, token_1.default.secret, { expiresIn: '20d' });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, token_1.default.secret);
    }
}
exports.Token = Token;
