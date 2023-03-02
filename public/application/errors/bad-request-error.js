"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
class BadRequestError extends Error {
    statusCode = 400;
    code;
    constructor(message, code) {
        super('Bad Request');
        this.name = 'BadRequestError';
        this.message = message;
        this.code = code;
    }
}
exports.BadRequestError = BadRequestError;
