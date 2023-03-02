"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeUpdateCustomerRepository = () => {
    return new repositories_1.UpdateCustomer();
};
exports.makeUpdateCustomerRepository = makeUpdateCustomerRepository;
