"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllAddressService = void 0;
const services_1 = require("../../../../domain/services");
const infra_1 = require("../../../../main/factories/infra");
const makeGetAllAddressService = () => {
    return new services_1.GetAllAddressService((0, infra_1.makeGetAllAddressRepository)());
};
exports.makeGetAllAddressService = makeGetAllAddressService;
