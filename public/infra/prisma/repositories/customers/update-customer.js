"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer = void 0;
const prisma_1 = require("../../prisma");
class UpdateCustomer {
    async putCustomer(customer) {
        const { id } = customer;
        try {
            await prisma_1.Prisma.customer.update({ data: customer, where: { id } });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.UpdateCustomer = UpdateCustomer;
