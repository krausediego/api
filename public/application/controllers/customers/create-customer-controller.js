"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const helpers_1 = require("../../../application/helpers");
class CreateCustomerController {
    createCustomerService;
    constructor(createCustomerService) {
        this.createCustomerService = createCustomerService;
    }
    async handle({ data, }) {
        try {
            const message = await this.createCustomerService().run(data);
            return (0, helpers_1.ok)(message);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.CreateCustomerController = CreateCustomerController;
