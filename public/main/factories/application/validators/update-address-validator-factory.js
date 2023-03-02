"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateAddressValidator = void 0;
const validators_1 = require("../../../../application/validators");
const makeUpdateAddressValidator = () => {
    return new validators_1.UpdateAddressValidator();
};
exports.makeUpdateAddressValidator = makeUpdateAddressValidator;
