"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUser = void 0;
const prisma_1 = require("../prisma");
class FindUser {
    async findUserGeneric(query) {
        try {
            return await prisma_1.Prisma.user.findFirst(query);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.FindUser = FindUser;
