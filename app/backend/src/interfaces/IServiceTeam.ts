import Teams from '../database/models/team.model';
import ITeam from './ITeam';

export default interface IServiceTeam {
  getAll(): Promise<ITeam[]>
  getById(id: number): Promise<Teams | null>
  create(teamName: ITeam): Promise<Teams>
}
