"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCustomerService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeGetCustomerService = () => {
    return new services_1.GetCustomerService((0, infra_1.makeGetCustomerRepository)());
};
exports.makeGetCustomerService = makeGetCustomerService;
