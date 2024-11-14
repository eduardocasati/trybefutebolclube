import { Request, Response, Router } from 'express';
import { MatchController } from '../controllers';
import tokenValidation from '../middlewares/validations/tokenValidation.middleware';
import { MatchService } from '../services';

const matchRouter = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req: Request, res: Response) => matchController.getAll(req, res));

matchRouter.patch(
  '/:id',
  tokenValidation.verifyToken,
  (req: Request, res: Response) => matchController.updateMatchGoals(req, res),
);

matchRouter.patch(
  '/:id/finish',
  tokenValidation.verifyToken,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

matchRouter.post(
  '/',
  tokenValidation.verifyToken,
  (req: Request, res: Response) => matchController.createMatch(req, res),
);

export default matchRouter;
