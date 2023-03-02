"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHash = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class BcryptHash {
    async createHash(key) {
        return bcryptjs_1.default.hash(key, await this.generateSalt());
    }
    async compareHash(key, hash) {
        return bcryptjs_1.default.compare(key, hash);
    }
    async generateSalt() {
        return bcryptjs_1.default.genSalt(3);
    }
}
exports.BcryptHash = BcryptHash;
