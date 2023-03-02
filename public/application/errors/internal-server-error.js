"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
class InternalServerError extends Error {
    statusCode = 500;
    code;
    constructor(message, code) {
        super('Internal Server Error');
        this.name = 'InternalServerError';
        this.message = message;
        this.code = code;
    }
}
exports.InternalServerError = InternalServerError;
