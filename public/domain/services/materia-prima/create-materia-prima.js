"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMateriaPrimaService = void 0;
class CreateMateriaPrimaService {
    createMateriaPrima;
    constructor(createMateriaPrima) {
        this.createMateriaPrima = createMateriaPrima;
    }
    async run(params) {
        await this.createMateriaPrima.createNewMateriaPrima(params);
        return { message: 'Matéria prima criada com sucesso.' };
    }
}
exports.CreateMateriaPrimaService = CreateMateriaPrimaService;
