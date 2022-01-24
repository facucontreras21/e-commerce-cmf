import {Router} from 'express';
import {registerUser, authUser} from '../controllers/userController.js';

const router = Router();

router.post('/',registerUser);
router.post('/',authUser);

export default router;