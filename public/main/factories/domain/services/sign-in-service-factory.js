"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignInService = void 0;
const services_1 = require("../../../../domain/services");
const infra_1 = require("../../../../main/factories/infra");
const makeSignInService = () => {
    return new services_1.SignInService((0, infra_1.makeFindUserRepository)(), (0, infra_1.makeHash)(), (0, infra_1.makeToken)());
};
exports.makeSignInService = makeSignInService;
