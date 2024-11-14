import ITeamStatistics from './ITeamStatistics';

export default interface IServiceLeaderboard {
  getBoard(path: string): Promise<ITeamStatistics[]>;
}
