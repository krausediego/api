"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllCustomersValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeGetAllCustomersValidator = () => {
    return new validators_1.GetAllCustomersValidator();
};
exports.makeGetAllCustomersValidator = makeGetAllCustomersValidator;
