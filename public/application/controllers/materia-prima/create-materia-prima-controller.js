"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMateriaPrimaController = void 0;
const helpers_1 = require("../../../application/helpers");
class CreateMateriaPrimaController {
    createMateriaPrimaService;
    constructor(createMateriaPrimaService) {
        this.createMateriaPrimaService = createMateriaPrimaService;
    }
    async handle({ data, }) {
        try {
            const message = await this.createMateriaPrimaService().run(data);
            return (0, helpers_1.ok)(message);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.CreateMateriaPrimaController = CreateMateriaPrimaController;
