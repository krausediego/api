"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerService = void 0;
class GetCustomerService {
    getCustomerRepository;
    constructor(getCustomerRepository) {
        this.getCustomerRepository = getCustomerRepository;
    }
    async run(params) {
        const { customer_id } = params;
        const customer = await this.getCustomerRepository.findCustomer({
            customer_id,
        });
        return customer;
    }
}
exports.GetCustomerService = GetCustomerService;
