"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateMateriaPrimaService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeCreateMateriaPrimaService = () => {
    return new services_1.CreateMateriaPrimaService((0, infra_1.makeCreateMateriaPrimaRepository)());
};
exports.makeCreateMateriaPrimaService = makeCreateMateriaPrimaService;
