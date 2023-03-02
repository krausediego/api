"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpService = void 0;
const services_1 = require("../../../../domain/services");
const infra_1 = require("../../../../main/factories/infra");
const makeSignUpService = () => {
    return new services_1.SignUpService((0, infra_1.makeHash)(), (0, infra_1.makeSignUpRepository)());
};
exports.makeSignUpService = makeSignUpService;
