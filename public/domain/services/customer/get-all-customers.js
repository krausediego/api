"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCustomersService = void 0;
class GetAllCustomersService {
    getAllCustomersRepository;
    constructor(getAllCustomersRepository) {
        this.getAllCustomersRepository = getAllCustomersRepository;
    }
    async run(params) {
        const { user_id, search } = params;
        const customers = await this.getAllCustomersRepository.findAllCustomers({
            user_id,
            search,
        });
        return customers;
    }
}
exports.GetAllCustomersService = GetAllCustomersService;
