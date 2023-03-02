"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeUpdateCustomerController = () => {
    return new controllers_1.UpdateCustomerController(domain_1.makeUpdateCustomerService);
};
exports.makeUpdateCustomerController = makeUpdateCustomerController;
