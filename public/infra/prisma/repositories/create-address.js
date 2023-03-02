"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddress = void 0;
const prisma_1 = require("../prisma");
class CreateAddress {
    async createNewAddress(address) {
        try {
            return await prisma_1.Prisma.address.create({ data: address });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.CreateAddress = CreateAddress;
