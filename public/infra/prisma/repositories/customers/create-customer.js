"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomer = void 0;
const prisma_1 = require("../../prisma");
class CreateCustomer {
    async createNewCustomer(customer) {
        try {
            await prisma_1.Prisma.customer.create({ data: customer });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.CreateCustomer = CreateCustomer;
