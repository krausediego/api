"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeToken = void 0;
const token_1 = require("../../../../infra/jwt/token");
const makeToken = () => {
    return new token_1.Token();
};
exports.makeToken = makeToken;
