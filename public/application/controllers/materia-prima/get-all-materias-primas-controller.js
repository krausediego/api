"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMateriasPrimasController = void 0;
const helpers_1 = require("../../../application/helpers");
class GetAllMateriasPrimasController {
    getAllMateriasPrimasService;
    constructor(getAllMateriasPrimasService) {
        this.getAllMateriasPrimasService = getAllMateriasPrimasService;
    }
    async handle(request) {
        try {
            const materiasPrimas = await this.getAllMateriasPrimasService().run(request.data);
            return (0, helpers_1.ok)(materiasPrimas);
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.GetAllMateriasPrimasController = GetAllMateriasPrimasController;
