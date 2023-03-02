"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomer = void 0;
const prisma_1 = require("../../prisma");
class GetCustomer {
    async findCustomer({ customer_id, }) {
        try {
            return await prisma_1.Prisma.customer.findUnique({
                where: {
                    id: customer_id,
                },
                include: { address: true },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetCustomer = GetCustomer;
