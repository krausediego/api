"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllMateriasPrimasService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeGetAllMateriasPrimasService = () => {
    return new services_1.GetAllMateriasPrimasService((0, infra_1.makeGetAllMateriasPrimasRepository)());
};
exports.makeGetAllMateriasPrimasService = makeGetAllMateriasPrimasService;
