"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAddressService = void 0;
const services_1 = require("../../../../domain/services");
const infra_1 = require("../../../../main/factories/infra");
const makeCreateAddressService = () => {
    return new services_1.CreateAddressService((0, infra_1.makeCreateAddressRepository)());
};
exports.makeCreateAddressService = makeCreateAddressService;
