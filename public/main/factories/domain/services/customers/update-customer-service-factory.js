"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeUpdateCustomerService = () => {
    return new services_1.UpdateCustomerService((0, infra_1.makeUpdateCustomerRepository)());
};
exports.makeUpdateCustomerService = makeUpdateCustomerService;
