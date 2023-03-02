"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    statusCode = 404;
    code;
    constructor(message, code) {
        super('Not Found');
        this.name = 'NotFoundError';
        this.message = message;
        this.code = code;
    }
}
exports.NotFoundError = NotFoundError;
