import { Request, Response } from 'express';
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';
import { LeaderboardController } from '../controllers';
import { LeaderboardsService } from '../services';

describe('Testes do LeaderboardController', () => {
  let res: Partial<Response>;
  let getBoardStub: SinonStub;
  const leaderboardService = new LeaderboardsService();
  const leaderboardController = new LeaderboardController(leaderboardService);

  beforeEach(() => {
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as Partial<Response>;

    getBoardStub = sinon.stub(leaderboardService, 'getBoard');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Obtém o leaderboard', async () => {
    const req = {} as Request;
    const leaderboardData = [{ name: 'Team A', totalPoints: 10 }];
    getBoardStub.resolves(leaderboardData);

    await leaderboardController.getBoard(req, res as Response);

    sinon.assert.calledWith(res.status as SinonStub, 200);
    sinon.assert.calledWith(res.json as SinonStub, leaderboardData);
  });
});
