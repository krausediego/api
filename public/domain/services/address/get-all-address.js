"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAddressService = void 0;
class GetAllAddressService {
    getAllAddressRepository;
    constructor(getAllAddressRepository) {
        this.getAllAddressRepository = getAllAddressRepository;
    }
    async run(params) {
        const { user_id } = params;
        const address = await this.getAllAddressRepository.findAllAddress({
            user_id,
        });
        return { ...address };
    }
}
exports.GetAllAddressService = GetAllAddressService;
