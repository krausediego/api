"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenMiddleware = void 0;
const helpers_1 = require("../helpers");
class AuthTokenMiddleware {
    token;
    constructor(token) {
        this.token = token;
    }
    async handle(params) {
        try {
            await this.token.verifyToken(params.data.accessToken);
            return (0, helpers_1.noContent)();
        }
        catch (error) {
            error.statusCode = 401;
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.AuthTokenMiddleware = AuthTokenMiddleware;
