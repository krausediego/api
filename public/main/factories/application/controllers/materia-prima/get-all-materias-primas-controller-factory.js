"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllMateriasPrimasController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeGetAllMateriasPrimasController = () => {
    return new controllers_1.GetAllMateriasPrimasController(domain_1.makeGetAllMateriasPrimasService);
};
exports.makeGetAllMateriasPrimasController = makeGetAllMateriasPrimasController;
