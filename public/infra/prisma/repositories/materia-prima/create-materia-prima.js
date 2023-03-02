"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMateriaPrima = void 0;
const prisma_1 = require("../../prisma");
class CreateMateriaPrima {
    async createNewMateriaPrima(materiaPrima) {
        try {
            await prisma_1.Prisma.materiaPrima.create({ data: materiaPrima });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.CreateMateriaPrima = CreateMateriaPrima;
