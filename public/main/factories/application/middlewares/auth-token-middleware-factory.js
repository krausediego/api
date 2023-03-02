"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthTokenMiddleware = void 0;
const middlewares_1 = require("../../../../application/middlewares");
const infra_1 = require("../../../../main/factories/infra");
const makeAuthTokenMiddleware = () => {
    return new middlewares_1.AuthTokenMiddleware((0, infra_1.makeToken)());
};
exports.makeAuthTokenMiddleware = makeAuthTokenMiddleware;
