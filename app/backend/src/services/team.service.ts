import { ModelStatic } from 'sequelize';
import Team from '../database/models/team.model';
import { IServiceTeam, ITeam } from '../interfaces';

class TeamService implements IServiceTeam {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const team = await this.model.findByPk(id);
    return team;
  }

  async create(teamName: ITeam): Promise<Team> {
    const newTeam = await this.model.create({ teamName });
    return newTeam;
  }
}

export default TeamService;
