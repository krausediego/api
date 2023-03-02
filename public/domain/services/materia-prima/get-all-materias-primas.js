"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMateriasPrimasService = void 0;
class GetAllMateriasPrimasService {
    getAllMateriasPrimasRepository;
    constructor(getAllMateriasPrimasRepository) {
        this.getAllMateriasPrimasRepository = getAllMateriasPrimasRepository;
    }
    async run(params) {
        const { user_id, search } = params;
        const materiasPrimas = await this.getAllMateriasPrimasRepository.findAllMateriasPrimas({
            user_id,
            search,
        });
        return materiasPrimas;
    }
}
exports.GetAllMateriasPrimasService = GetAllMateriasPrimasService;
