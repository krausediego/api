"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllCustomersRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeGetAllCustomersRepository = () => {
    return new repositories_1.GetAllCustomers();
};
exports.makeGetAllCustomersRepository = makeGetAllCustomersRepository;
