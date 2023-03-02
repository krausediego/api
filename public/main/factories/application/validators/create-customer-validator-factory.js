"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCustomerValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeCreateCustomerValidator = () => {
    return new validators_1.CreateCustomerValidator();
};
exports.makeCreateCustomerValidator = makeCreateCustomerValidator;
