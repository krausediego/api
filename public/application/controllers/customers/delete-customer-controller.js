"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerController = void 0;
const helpers_1 = require("../../../application/helpers");
class DeleteCustomerController {
    deleteCustomerService;
    constructor(deleteCustomerService) {
        this.deleteCustomerService = deleteCustomerService;
    }
    async handle({ data, }) {
        try {
            const message = await this.deleteCustomerService().run(data);
            return (0, helpers_1.ok)(message);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.DeleteCustomerController = DeleteCustomerController;
