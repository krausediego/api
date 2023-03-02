"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllMateriasPrimasRepository = void 0;
const repositories_1 = require("../../../../../infra/prisma/repositories");
const makeGetAllMateriasPrimasRepository = () => {
    return new repositories_1.GetAllMateriasPrimas();
};
exports.makeGetAllMateriasPrimasRepository = makeGetAllMateriasPrimasRepository;
