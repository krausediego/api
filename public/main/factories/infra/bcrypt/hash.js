"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHash = void 0;
const bcrypt_1 = require("../../../../infra/bcrypt");
const makeHash = () => {
    return new bcrypt_1.BcryptHash();
};
exports.makeHash = makeHash;
