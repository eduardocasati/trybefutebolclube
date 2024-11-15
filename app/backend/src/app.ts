import * as express from 'express';
import { NextFunction, Request, Response } from 'express';

import errorMiddleware from './middlewares/error.middleware';

import { leaderboardRouter, loginRouter, matchRouter, teamRouter } from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // ===
    this.routes();

    // Não remover essa rota
    this.app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

    // ===
    this.app.use(errorMiddleware);
  }

  // Rotas
  private routes(): void {
    this.app.use('/teams', teamRouter);
    this.app.use('/login', loginRouter);
    this.app.use('/matches', matchRouter);
    this.app.use('/leaderboard', leaderboardRouter);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (
      _req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
