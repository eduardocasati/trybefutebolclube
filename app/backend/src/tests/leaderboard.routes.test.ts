import { Request, Response } from 'express';
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';
import { LeaderboardController } from '../controllers';
import { leaderboardRouter } from '../routes';
import { LeaderboardsService } from '../services';

describe('Testes do leaderboardRouter', () => {
  let res: Partial<Response>;
  let getBoardStub: SinonStub;
  const leaderboardService = new LeaderboardsService();
  const leaderboardController = new LeaderboardController(leaderboardService);

  beforeEach(() => {
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as Partial<Response>;

    getBoardStub = sinon.stub(leaderboardController, 'getBoard');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Obtém o leaderboard geral com o path "/"', async () => {
    const req = { path: '/' } as Request;

    await (leaderboardRouter.get('/home') as any).route.stack[0].handle(req, res as Response);

    sinon.assert.calledWith(getBoardStub, '/');
  });

  it('Obtém o leaderboard de mandantes com o path "/home"', async () => {
    const req = { path: '/home' } as Request;

    await (leaderboardRouter.get('/home') as any).route.stack[0].handle(req, res as Response);

    sinon.assert.calledWith(getBoardStub, '/home');
  });

  it('Obtém o leaderboard de visitantes com o path "/away"', async () => {
    const req = { path: '/away' } as Request;

    await (leaderboardRouter.get('/away') as any).route.stack[0].handle(req, res as Response);

    sinon.assert.calledWith(getBoardStub, '/away');
  });
});
