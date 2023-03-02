"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCustomerRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeGetCustomerRepository = () => {
    return new repositories_1.GetCustomer();
};
exports.makeGetCustomerRepository = makeGetCustomerRepository;
