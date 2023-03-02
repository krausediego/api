"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignInController = void 0;
const controllers_1 = require("../../../../application/controllers");
const domain_1 = require("../../../../main/factories/domain");
const makeSignInController = () => {
    return new controllers_1.SignInController(domain_1.makeSignInService);
};
exports.makeSignInController = makeSignInController;
