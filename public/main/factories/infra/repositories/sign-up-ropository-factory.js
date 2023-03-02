"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpRepository = void 0;
const repositories_1 = require("../../../../infra/prisma/repositories");
const makeSignUpRepository = () => {
    return new repositories_1.SignUpRopository();
};
exports.makeSignUpRepository = makeSignUpRepository;
