import { Request, Response } from 'express';
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';
import { TeamController } from '../controllers';
import { IServiceTeam } from '../interfaces';

describe('Testes do TeamController', () => {
  let service: IServiceTeam;
  let controller: TeamController;
  let res: Partial<Response>;

  beforeEach(() => {
    service = {
      getAll: sinon.stub(),
      getById: sinon.stub(),
      create: sinon.stub(),
    };
    controller = new TeamController(service);
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as Partial<Response>;
  });

  it('getAll', async () => {
    const teams = [{ id: 1, teamName: 'Team A' }];
    (service.getAll as SinonStub).resolves(teams);

    const req = {} as Request<{}, {}, {}, {}>;

    await controller.getAll(req, res as Response);

    sinon.assert.calledOnce(res.status as SinonStub);
    sinon.assert.calledWith(res.status as SinonStub, 200);
    sinon.assert.calledOnce(res.json as SinonStub);
    sinon.assert.calledWith(res.json as SinonStub, teams);
  });

  it('getById', async () => {
    const team = { id: 1, teamName: 'Team A' };
    (service.getById as SinonStub).resolves(team);

    const req = { params: { id: '1' } } as unknown as Request<{}, {}, {}, { id: string }>;

    await controller.getById(req, res as Response);

    sinon.assert.calledOnce(res.status as SinonStub);
    sinon.assert.calledWith(res.status as SinonStub, 200);
    sinon.assert.calledOnce(res.json as SinonStub);
    sinon.assert.calledWith(res.json as SinonStub, team);
  });

  it('create', async () => {
    const newTeam = { id: 2, teamName: 'Team B' };
    (service.create as SinonStub).resolves(newTeam);

    const req = { body: { teamName: 'Team B' } } as Request<{}, {}, { teamName: string }, {}>;

    await controller.create(req, res as Response);

    sinon.assert.calledOnce(res.status as SinonStub);
    sinon.assert.calledWith(res.status as SinonStub, 201);
    sinon.assert.calledOnce(res.json as SinonStub);
    sinon.assert.calledWith(res.json as SinonStub, newTeam);
  });
});
