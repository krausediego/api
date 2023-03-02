"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateMateriaPrimaRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeCreateMateriaPrimaRepository = () => {
    return new repositories_1.CreateMateriaPrima();
};
exports.makeCreateMateriaPrimaRepository = makeCreateMateriaPrimaRepository;
