"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCustomerRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeCreateCustomerRepository = () => {
    return new repositories_1.CreateCustomer();
};
exports.makeCreateCustomerRepository = makeCreateCustomerRepository;
