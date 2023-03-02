"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressService = void 0;
class CreateAddressService {
    createAddress;
    constructor(createAddress) {
        this.createAddress = createAddress;
    }
    async run(params) {
        const address = await this.createAddress.createNewAddress(params);
        return address;
    }
}
exports.CreateAddressService = CreateAddressService;
