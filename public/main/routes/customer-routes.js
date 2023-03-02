"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../../main/adapters");
const application_1 = require("../factories/application");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.post('/create-customer', (0, adapters_1.adaptMiddleware)((0, application_1.makeCreateCustomerValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeCreateCustomerController)()));
    router.get('/get-all-customers', (0, adapters_1.adaptMiddleware)((0, application_1.makeGetAllCustomersValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeGetAllCustomersController)()));
    router.delete('/customer', middlewares_1.authToken, (0, adapters_1.adaptRoute)((0, application_1.makeDeleteCustomerController)()));
    router.get('/get-customer/:customer_id', middlewares_1.authToken, (0, adapters_1.adaptRoute)((0, application_1.makeGetCustomerController)()));
    router.put('/update-customer', middlewares_1.authToken, (0, adapters_1.adaptMiddleware)((0, application_1.makeUpdateCustomerValidator)()), (0, adapters_1.adaptRoute)((0, application_1.makeUpdateCustomerController)()));
};
