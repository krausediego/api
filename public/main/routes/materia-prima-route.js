"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../adapters");
const application_1 = require("../factories/application");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.post('/create-materia-prima', middlewares_1.authToken, (0, adapters_1.adaptRoute)((0, application_1.makeCreateMateriaPrimaController)()));
    router.get('/get-all-materias-primas', middlewares_1.authToken, (0, adapters_1.adaptRoute)((0, application_1.makeGetAllMateriasPrimasController)()));
};
