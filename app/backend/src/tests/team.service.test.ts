import { expect } from 'chai';
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';
import { IServiceTeam, ITeam } from '../interfaces';
import { TeamService } from '../services';

class MockModel {
  public static findByPk: SinonStub;
  public static findAll: SinonStub;
  public static create: SinonStub;
}

describe('Testes do TeamService', () => {
  let model: {
    findByPk: SinonStub;
    findAll: SinonStub;
    create: SinonStub;
  };
  let service: IServiceTeam;

  beforeEach(() => {
    model = {
      findByPk: sinon.stub(),
      findAll: sinon.stub(),
      create: sinon.stub(),
    };
    service = new TeamService();
    (service as any)['model'] = model;
  });

  it('getAll', async () => {
    const teams = [{ id: 1, teamName: 'Team A' }];
    model.findAll.resolves(teams);

    const result = await service.getAll();

    expect(result).to.deep.equal(teams);
  });

  it('getById', async () => {
    const team = { id: 1, teamName: 'Team A' };
    model.findByPk.resolves(team);

    const result = await service.getById(1);

    expect(result).to.deep.equal(team);
  });

  it('create', async () => {
    const newTeam: ITeam = { teamName: 'Team B' };
    model.create.resolves(newTeam);

    const result = await service.create(newTeam);

    expect(result).to.deep.equal(newTeam);
  });
});
