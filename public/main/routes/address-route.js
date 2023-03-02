"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../../main/adapters");
const application_1 = require("../../main/factories/application");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.post('/create-address', (0, adapters_1.adaptMiddleware)((0, application_1.makeCreateAddressValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeCreateAddressController)()));
    router.get('/get-all-address', middlewares_1.authToken, (0, adapters_1.adaptMiddleware)((0, application_1.makeGetAllAddressValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeGetAllAddressController)()));
    router.put('/update-address', middlewares_1.authToken, (0, adapters_1.adaptMiddleware)((0, application_1.makeUpdateAddressValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeUpdateAddressController)()));
};
