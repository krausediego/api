"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpError = exports.noContent = exports.created = exports.ok = void 0;
const ok = (data) => ({
    statusCode: 200,
    body: data,
});
exports.ok = ok;
const created = (data) => ({
    statusCode: 201,
    body: data,
});
exports.created = created;
const noContent = () => ({
    statusCode: 204,
});
exports.noContent = noContent;
const getHttpError = (error) => ({
    statusCode: error.statusCode || 500,
    code: error?.code,
    body: error,
});
exports.getHttpError = getHttpError;
