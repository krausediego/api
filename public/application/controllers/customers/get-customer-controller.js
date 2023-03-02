"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerController = void 0;
const helpers_1 = require("../../../application/helpers");
class GetCustomerController {
    getCustomerService;
    constructor(getCustomerService) {
        this.getCustomerService = getCustomerService;
    }
    async handle(request) {
        try {
            const customer = await this.getCustomerService().run(request.data);
            return (0, helpers_1.ok)(customer);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.GetCustomerController = GetCustomerController;
