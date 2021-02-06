import { getMatches, Match } from './getMatches';

describe('getMatches', () => {
  it('returns an array with exact and partial matches, with rest as no match', () => {
    const guess = [0, 0, 1, 1];
    const secretCode = [1, 0, 2, 1];

    const matches = getMatches(guess, secretCode);

    expect(matches).toEqual([Match.Exact, Match.Exact, Match.Partial, Match.None]);
  });
});
