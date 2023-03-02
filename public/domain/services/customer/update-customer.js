"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerService = void 0;
class UpdateCustomerService {
    updateCustomer;
    constructor(updateCustomer) {
        this.updateCustomer = updateCustomer;
    }
    async run(params) {
        await this.updateCustomer.putCustomer(params);
        return { message: 'ok' };
    }
}
exports.UpdateCustomerService = UpdateCustomerService;
