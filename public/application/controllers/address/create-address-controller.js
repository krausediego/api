"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressController = void 0;
const helpers_1 = require("../../../application/helpers");
class CreateAddressController {
    createAddressService;
    constructor(createAddressService) {
        this.createAddressService = createAddressService;
    }
    async handle(request) {
        try {
            const response = await this.createAddressService().run(request.data);
            return (0, helpers_1.ok)({ ...response });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.CreateAddressController = CreateAddressController;
