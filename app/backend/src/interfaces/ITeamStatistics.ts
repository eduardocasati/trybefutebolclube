export default interface ITeamStatistics {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

export interface IStatisticsSchema {
  id: number;
  teamName: string;
  games: number[];
  victories: number[];
  draws: number[];
  losses: number[];
  goalsFavor: number[];
  goalsOwn: number[];
}

export type inputStatistics = {
  index: number;
  positiveGoals: number;
  negativeGoals: number;
  result: string;
};
