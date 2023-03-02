"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpController = void 0;
const controllers_1 = require("../../../../application/controllers");
const domain_1 = require("../../../../main/factories/domain");
const makeSignUpController = () => {
    return new controllers_1.SignUpController(domain_1.makeSignUpService);
};
exports.makeSignUpController = makeSignUpController;
