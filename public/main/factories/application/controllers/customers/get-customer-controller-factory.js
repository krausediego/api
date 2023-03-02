"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCustomerController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeGetCustomerController = () => {
    return new controllers_1.GetCustomerController(domain_1.makeGetCustomerService);
};
exports.makeGetCustomerController = makeGetCustomerController;
