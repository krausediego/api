"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressController = void 0;
const helpers_1 = require("../../../application/helpers");
class UpdateAddressController {
    updateAddressService;
    constructor(updateAddressService) {
        this.updateAddressService = updateAddressService;
    }
    async handle(request) {
        try {
            const response = await this.updateAddressService().run(request.data);
            return (0, helpers_1.ok)({ ...response });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.UpdateAddressController = UpdateAddressController;
