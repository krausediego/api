"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCustomerService = void 0;
const services_1 = require("../../../../../domain/services");
const infra_1 = require("../../../../../main/factories/infra");
const makeDeleteCustomerService = () => {
    return new services_1.DeleteCustomerService((0, infra_1.makeDeleteCustomerRepository)());
};
exports.makeDeleteCustomerService = makeDeleteCustomerService;
