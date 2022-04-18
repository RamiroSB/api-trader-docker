import { Router } from 'express';
import { GetMarcas } from '../Controllers/marcas.controller';


const router = Router();

router.route('/marcas').get(GetMarcas);

export default router;