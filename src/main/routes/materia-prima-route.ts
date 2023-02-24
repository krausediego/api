import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeGetAllMateriasPrimasController } from '../factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post('/create-materia-prima');

  router.get(
    '/get-all-materias-primas',
    authToken,
    adaptRoute(makeGetAllMateriasPrimasController()),
  );
};
