"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
class ForbiddenError extends Error {
    statusCode = 403;
    code;
    constructor(message, code) {
        super('Forbidden');
        this.name = 'ForbiddenError';
        this.message = message;
        this.code = code;
    }
}
exports.ForbiddenError = ForbiddenError;
