import { Router } from 'express';
import {
    GetUserInfo, 
    UpdateUserInfo, 
    UpdatePasswordController, 
    GetHomeUserInfo
} from '../controllers/user.controllers';
import { UpdateInfoValidator, UpdatePasswordValitador } from '../validators/user.validators';
import authMiddleware from '../middlewares/auth.middlewares';
const router = Router();

router.get(
    '/user/info',
    authMiddleware,
    GetUserInfo
)

router.get(
    '/user/home',
    authMiddleware,
    GetHomeUserInfo
)

router.put(
    '/user/update',
    authMiddleware,
    UpdateInfoValidator,
    UpdateUserInfo
);

router.put(
    '/user/update/password',
    authMiddleware,
    UpdatePasswordValitador,
    UpdatePasswordController    
)

export default router;