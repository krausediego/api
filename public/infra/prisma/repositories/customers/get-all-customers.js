"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCustomers = void 0;
const prisma_1 = require("../../prisma");
class GetAllCustomers {
    async findAllCustomers({ user_id, search, }) {
        try {
            return await prisma_1.Prisma.customer.findMany({
                where: {
                    user_id,
                    AND: [
                        {
                            OR: [
                                { email: { contains: search, mode: 'insensitive' } },
                                { name: { contains: search, mode: 'insensitive' } },
                            ],
                        },
                    ],
                },
                include: { address: true },
                orderBy: { name: 'asc' },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetAllCustomers = GetAllCustomers;
