import { Request, Response, Router } from 'express';
import UserController from '../controllers/login.controller';
import userLoginValidation from '../middlewares/validations/loginValidation.middleware';
import tokenValidation from '../middlewares/validations/tokenValidation.middleware';

const userController = new UserController();

const router = Router();

router.post('/', userLoginValidation.validate, (request: Request, response: Response) => {
  userController.userLogin(request, response);
});
router.get('/role', tokenValidation.verifyToken, (request: Request, response: Response) => {
  userController.getUserRole(request, response);
});

export default router;
