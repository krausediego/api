"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMateriasPrimas = void 0;
const prisma_1 = require("../../prisma");
class GetAllMateriasPrimas {
    async findAllMateriasPrimas({ user_id, search, }) {
        try {
            return await prisma_1.Prisma.materiaPrima.findMany({
                where: {
                    user_id,
                    AND: [
                        {
                            name: { contains: search, mode: 'insensitive' },
                        },
                    ],
                },
                orderBy: { id: 'asc' },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetAllMateriasPrimas = GetAllMateriasPrimas;
