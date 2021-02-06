import { getExactMatches } from './getExactMatches';
import { Match } from './getMatches';

describe('getExactMatches', () => {
  it('returns an array with exact matches, with rest as no match', () => {
    const guess = [0, 0, 1, 1];
    const secretCode = [1, 0, 2, 1];

    const exactMatches = getExactMatches(guess, secretCode);

    expect(exactMatches).toEqual([Match.None, Match.Exact, Match.None, Match.Exact]);
  });
});
