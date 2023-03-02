"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllCustomersController = void 0;
const controllers_1 = require("../../../../../application/controllers");
const domain_1 = require("../../../../../main/factories/domain");
const makeGetAllCustomersController = () => {
    return new controllers_1.GetAllCustomersController(domain_1.makeGetAllCustomersService);
};
exports.makeGetAllCustomersController = makeGetAllCustomersController;
