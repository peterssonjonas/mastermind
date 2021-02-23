import { checkForWin } from './checkForWin';
import { Match } from './getMatches';


describe('checkForWin', () => {
  it('should return true when all matches exactly', () => {
    const matches: Match[] = [Match.Exact, Match.Exact];

    const isWin = checkForWin(matches);

    expect(isWin).toBe(true);
  });

  it('should return false when no exact match', () => {
    const matches: Match[] = [Match.Partial, Match.None];

    const isWin = checkForWin(matches);

    expect(isWin).toBe(false);
  });

  it('should return false when not all are exact matches', () => {
    const matches: Match[] = [Match.Partial, Match.Exact];

    const isWin = checkForWin(matches);

    expect(isWin).toBe(false);
  });
});