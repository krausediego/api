"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressRepository = void 0;
const prisma_1 = require("../prisma");
class UpdateAddressRepository {
    async putAddress(address) {
        const { id } = address;
        try {
            await prisma_1.Prisma.address.update({ data: address, where: { id } });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.UpdateAddressRepository = UpdateAddressRepository;
