import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ massage: 'Requisição realizada com sucesso' });
});

export default routes;