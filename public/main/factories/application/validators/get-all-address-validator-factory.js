"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllAddressValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeGetAllAddressValidator = () => {
    return new validators_1.GetAllAddressValidator();
};
exports.makeGetAllAddressValidator = makeGetAllAddressValidator;
