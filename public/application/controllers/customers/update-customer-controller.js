"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerController = void 0;
const helpers_1 = require("../../../application/helpers");
class UpdateCustomerController {
    updateCustomerService;
    constructor(updateCustomerService) {
        this.updateCustomerService = updateCustomerService;
    }
    async handle(request) {
        try {
            const response = await this.updateCustomerService().run(request.data);
            return (0, helpers_1.ok)({ response });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.UpdateCustomerController = UpdateCustomerController;
