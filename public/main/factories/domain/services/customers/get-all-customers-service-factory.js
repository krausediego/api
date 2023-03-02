"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllCustomersService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeGetAllCustomersService = () => {
    return new services_1.GetAllCustomersService((0, infra_1.makeGetAllCustomersRepository)());
};
exports.makeGetAllCustomersService = makeGetAllCustomersService;
