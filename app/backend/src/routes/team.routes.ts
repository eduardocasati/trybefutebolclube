import { Request, Response, Router } from 'express';
import { TeamController } from '../controllers';
import { TeamService } from '../services';

const teamRouter = Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamRouter.get('/', (req: Request, res: Response) => teamController.getAll(req, res));

teamRouter.get('/:id', (req: Request, res: Response) => teamController.getById(req, res));

teamRouter.post('/', (req: Request, res: Response) => teamController.create(req, res));

export default teamRouter;
