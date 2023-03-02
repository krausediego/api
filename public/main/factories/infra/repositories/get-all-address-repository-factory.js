"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllAddressRepository = void 0;
const repositories_1 = require("../../../../infra/prisma/repositories");
const makeGetAllAddressRepository = () => {
    return new repositories_1.GetAllAddress();
};
exports.makeGetAllAddressRepository = makeGetAllAddressRepository;
