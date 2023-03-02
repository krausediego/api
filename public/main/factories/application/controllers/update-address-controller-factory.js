"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateAddressController = void 0;
const controllers_1 = require("../../../../application/controllers");
const domain_1 = require("../../../../main/factories/domain");
const makeUpdateAddressController = () => {
    return new controllers_1.UpdateAddressController(domain_1.makeUpdateAddressService);
};
exports.makeUpdateAddressController = makeUpdateAddressController;
