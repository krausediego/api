"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomer = void 0;
const prisma_1 = require("../../prisma");
class DeleteCustomer {
    async deleteCustomer(customer_id, address_id) {
        try {
            await prisma_1.Prisma.customer.delete({ where: { id: customer_id } });
            await prisma_1.Prisma.address.delete({ where: { id: address_id } });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.DeleteCustomer = DeleteCustomer;
