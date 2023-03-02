"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateAddressService = void 0;
const services_1 = require("../../../../domain/services");
const infra_1 = require("../../../../main/factories/infra");
const makeUpdateAddressService = () => {
    return new services_1.UpdateAddressService((0, infra_1.makeUpdateAddressRepository)());
};
exports.makeUpdateAddressService = makeUpdateAddressService;
