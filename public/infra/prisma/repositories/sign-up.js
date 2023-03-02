"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpRopository = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../prisma");
class SignUpRopository {
    async createNewUser(user) {
        try {
            await prisma_1.Prisma.user.create({ data: user });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new Error('Algum dos campos ja esta em uso');
                }
                else {
                    throw new Error('Erro inesperado');
                }
            }
        }
    }
}
exports.SignUpRopository = SignUpRopository;
