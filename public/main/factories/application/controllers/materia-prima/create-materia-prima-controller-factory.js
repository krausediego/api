"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateMateriaPrimaController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeCreateMateriaPrimaController = () => {
    return new controllers_1.CreateMateriaPrimaController(domain_1.makeCreateMateriaPrimaService);
};
exports.makeCreateMateriaPrimaController = makeCreateMateriaPrimaController;
