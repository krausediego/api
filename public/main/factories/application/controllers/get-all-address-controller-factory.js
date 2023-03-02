"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllAddressController = void 0;
const controllers_1 = require("../../../../application/controllers");
const domain_1 = require("../../../../main/factories/domain");
const makeGetAllAddressController = () => {
    return new controllers_1.GetAllAddressController(domain_1.makeGetAllAddressService);
};
exports.makeGetAllAddressController = makeGetAllAddressController;
