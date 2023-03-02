"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFindUserRepository = void 0;
const repositories_1 = require("../../../../infra/prisma/repositories");
const makeFindUserRepository = () => {
    return new repositories_1.FindUser();
};
exports.makeFindUserRepository = makeFindUserRepository;
