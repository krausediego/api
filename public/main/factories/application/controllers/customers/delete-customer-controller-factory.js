"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCustomerController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeDeleteCustomerController = () => {
    return new controllers_1.DeleteCustomerController(domain_1.makeDeleteCustomerService);
};
exports.makeDeleteCustomerController = makeDeleteCustomerController;
