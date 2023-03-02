"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAddressController = void 0;
const controllers_1 = require("../../../../application/controllers");
const domain_1 = require("../../../../main/factories/domain");
const makeCreateAddressController = () => {
    return new controllers_1.CreateAddressController(domain_1.makeCreateAddressService);
};
exports.makeCreateAddressController = makeCreateAddressController;
