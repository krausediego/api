"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAddressValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeCreateAddressValidator = () => {
    return new validators_1.CreateAddressValidator();
};
exports.makeCreateAddressValidator = makeCreateAddressValidator;
