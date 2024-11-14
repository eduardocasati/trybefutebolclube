import { expect } from 'chai';
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';
import { IResultMatch, IStatisticsSchema } from '../interfaces';
import { LeaderboardsService } from '../services';

describe('Testes do LeaderboardService', () => {
  let leaderboardService: LeaderboardsService;
  let calcResultMatchesStub: SinonStub;
  let setStatisticsSchemaStub: SinonStub;
  let inputStatisticsStub: SinonStub;
  let calcStatisticsHomeStub: SinonStub;
  let calcStatisticsAwayStub: SinonStub;
  let formatStatisticsStub: SinonStub;

  beforeEach(() => {
    leaderboardService = new LeaderboardsService();
    calcResultMatchesStub = sinon.stub(leaderboardService as any, 'calcResultMatches');
    setStatisticsSchemaStub = sinon.stub(leaderboardService as any, 'setStatisticsSchema');
    inputStatisticsStub = sinon.stub(leaderboardService as any, 'inputStatistics');
    calcStatisticsHomeStub = sinon.stub(leaderboardService as any, 'calcStatisticsHome');
    calcStatisticsAwayStub = sinon.stub(leaderboardService as any, 'calcStatisticsAway');
    formatStatisticsStub = sinon.stub(leaderboardService as any, 'formatStatistics');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Obtém o leaderboard de mandantes com o path "/home"', async () => {
    const path = '/home';
    const leaderboardData = [{ name: 'Team A', totalPoints: 10 }];

    calcResultMatchesStub.returns([] as IResultMatch[]);
    setStatisticsSchemaStub.returns([] as IStatisticsSchema[]);
    inputStatisticsStub.returns([] as IStatisticsSchema[]);
    calcStatisticsHomeStub.returns([] as IStatisticsSchema[]);
    formatStatisticsStub.returns(leaderboardData);

    const result = await leaderboardService.getBoard(path);

    expect(result).to.deep.equal(leaderboardData);
  });

  it('Obtém o leaderboard de visitantes com o path "/away"', async () => {
    const path = '/away';
    const leaderboardData = [{ name: 'Team A', totalPoints: 10 }];

    calcResultMatchesStub.returns([] as IResultMatch[]);
    setStatisticsSchemaStub.returns([] as IStatisticsSchema[]);
    inputStatisticsStub.returns([] as IStatisticsSchema[]);
    calcStatisticsAwayStub.returns([] as IStatisticsSchema[]);
    formatStatisticsStub.returns(leaderboardData);

    const result = await leaderboardService.getBoard(path);

    expect(result).to.deep.equal(leaderboardData);
  });

  it('Obtém o leaderboard geral com o path "/"', async () => {
    const path = '/other';
    const leaderboardData = [{ name: 'Team A', totalPoints: 10 }];

    calcResultMatchesStub.returns([] as IResultMatch[]);
    setStatisticsSchemaStub.returns([] as IStatisticsSchema[]);
    inputStatisticsStub.returns([] as IStatisticsSchema[]);
    calcStatisticsHomeStub.returns([] as IStatisticsSchema[]);
    calcStatisticsAwayStub.returns([] as IStatisticsSchema[]);
    formatStatisticsStub.returns(leaderboardData);

    const result = await leaderboardService.getBoard(path);

    expect(result).to.deep.equal(leaderboardData);
  });
});
