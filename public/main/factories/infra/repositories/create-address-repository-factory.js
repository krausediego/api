"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAddressRepository = void 0;
const repositories_1 = require("../../../../infra/prisma/repositories");
const makeCreateAddressRepository = () => {
    return new repositories_1.CreateAddress();
};
exports.makeCreateAddressRepository = makeCreateAddressRepository;
