"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerService = void 0;
class DeleteCustomerService {
    deleteCustomer;
    constructor(deleteCustomer) {
        this.deleteCustomer = deleteCustomer;
    }
    async run(params) {
        const { customer_id, address_id } = params;
        await this.deleteCustomer.deleteCustomer(customer_id, address_id);
        return { message: 'Cliente excluido com sucesso.' };
    }
}
exports.DeleteCustomerService = DeleteCustomerService;
