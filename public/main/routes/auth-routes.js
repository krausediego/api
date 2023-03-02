"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../../main/adapters");
const application_1 = require("../factories/application");
exports.default = (router) => {
    router.post('/sign-up', (0, adapters_1.adaptRoute)((0, application_1.makeSignUpController)()));
    router.post('/sign-in', (0, adapters_1.adaptRoute)((0, application_1.makeSignInController)()));
};
