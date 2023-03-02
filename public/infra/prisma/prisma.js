"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const client_1 = require("@prisma/client");
exports.Prisma = new client_1.PrismaClient({
    log: ['query', 'error', 'info', 'warn'],
});
