"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerService = void 0;
class CreateCustomerService {
    createCustomer;
    constructor(createCustomer) {
        this.createCustomer = createCustomer;
    }
    async run(params) {
        await this.createCustomer.createNewCustomer(params);
        return { message: 'Cliente criado com sucesso.' };
    }
}
exports.CreateCustomerService = CreateCustomerService;
