"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCustomerController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeCreateCustomerController = () => {
    return new controllers_1.CreateCustomerController(domain_1.makeCreateCustomerService);
};
exports.makeCreateCustomerController = makeCreateCustomerController;
