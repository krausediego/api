"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeUpdateCustomerValidator = () => {
    return new validators_1.UpdateCustomerValidator();
};
exports.makeUpdateCustomerValidator = makeUpdateCustomerValidator;
