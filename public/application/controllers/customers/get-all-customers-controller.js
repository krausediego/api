"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCustomersController = void 0;
const helpers_1 = require("../../../application/helpers");
class GetAllCustomersController {
    getAllCustomersService;
    constructor(getAllCustomersService) {
        this.getAllCustomersService = getAllCustomersService;
    }
    async handle(request) {
        try {
            const customers = await this.getAllCustomersService().run(request.data);
            return (0, helpers_1.ok)(customers);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.GetAllCustomersController = GetAllCustomersController;
