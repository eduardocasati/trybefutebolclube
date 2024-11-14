import { Request, Response, Router } from 'express';
import { LeaderboardController } from '../controllers';
import { LeaderboardsService } from '../services';

const leaderboardRouter = Router();
const leaderboardService = new LeaderboardsService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRouter.get(
  '/',
  (req: Request, res: Response) => leaderboardController.getBoard(req, res),
);

leaderboardRouter.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getBoard(req, res),
);

leaderboardRouter.get(
  '/away',
  (req: Request, res: Response) => leaderboardController.getBoard(req, res),
);

export default leaderboardRouter;
