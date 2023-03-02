"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCustomerService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeCreateCustomerService = () => {
    return new services_1.CreateCustomerService((0, infra_1.makeCreateCustomerRepository)());
};
exports.makeCreateCustomerService = makeCreateCustomerService;
