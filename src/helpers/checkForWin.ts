import { Match } from './getMatches';

export const checkForWin = (matches: Match[]) => matches.every(match => match === Match.Exact);