import { Router } from 'express';
import { GetArticulos } from '../Controllers/articulos.controller';

const router = Router();

router.route('/articulos').get(GetArticulos);

export default router;