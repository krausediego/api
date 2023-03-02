"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAddressController = void 0;
const helpers_1 = require("../../../application/helpers");
class GetAllAddressController {
    getAllAddressService;
    constructor(getAllAddressService) {
        this.getAllAddressService = getAllAddressService;
    }
    async handle(request) {
        try {
            const response = await this.getAllAddressService().run(request.data);
            return (0, helpers_1.ok)({ ...response });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.GetAllAddressController = GetAllAddressController;
