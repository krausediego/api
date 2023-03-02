"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAddress = void 0;
const prisma_1 = require("../prisma");
class GetAllAddress {
    async findAllAddress({ user_id, }) {
        try {
            return await prisma_1.Prisma.address.findMany({ where: { user_id } });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetAllAddress = GetAllAddress;
