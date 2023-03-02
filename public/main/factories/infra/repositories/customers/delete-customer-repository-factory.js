"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCustomerRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeDeleteCustomerRepository = () => {
    return new repositories_1.DeleteCustomer();
};
exports.makeDeleteCustomerRepository = makeDeleteCustomerRepository;
