import { Router } from 'express';

import { adaptRoute } from '../adapters';
import {
  makeGetAllMateriasPrimasController,
  makeCreateMateriaPrimaController,
} from '../factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post(
    '/create-materia-prima',
    authToken,
    adaptRoute(makeCreateMateriaPrimaController()),
  );

  router.get(
    '/get-all-materias-primas',
    authToken,
    adaptRoute(makeGetAllMateriasPrimasController()),
  );
};
