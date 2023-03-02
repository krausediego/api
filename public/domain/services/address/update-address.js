"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressService = void 0;
class UpdateAddressService {
    updateAddressRepository;
    constructor(updateAddressRepository) {
        this.updateAddressRepository = updateAddressRepository;
    }
    async run(params) {
        await this.updateAddressRepository.putAddress(params);
        return { message: 'ok' };
    }
}
exports.UpdateAddressService = UpdateAddressService;
