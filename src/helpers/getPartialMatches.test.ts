import { Match } from './getMatches';
import { getPartialMatches } from './getPartialMatches';

describe('getPartialMatches', () => {
  it('returns an array with partial matches, with rest as no match', () => {
    const guess = [0, 1, 2, 3];
    const secretCode = [4, 5, 6, 0];
    const matches = [Match.None, Match.None, Match.None, Match.None];

    const partialMatches = getPartialMatches(matches, guess, secretCode);

    expect(partialMatches).toEqual([Match.Partial, Match.None, Match.None, Match.None]);
  });
  
  it('does not override exact matches', () => {
    const guess = [0, 1, 2, 3];
    const secretCode = [0, 5, 6, 0];
    const matches = [Match.Exact, Match.None, Match.None, Match.None];

    const partialMatches = getPartialMatches(matches, guess, secretCode);

    expect(partialMatches).toEqual([Match.Exact, Match.None, Match.None, Match.None]);
  });

  it('does not match already matched guess', () => {
    const guess = [0, 0, 0, 5];
    const secretCode = [0, 5, 6, 0];
    const matches = [Match.Exact, Match.Partial, Match.None, Match.None];

    const partialMatches = getPartialMatches(matches, guess, secretCode);

    expect(partialMatches).toEqual([Match.Exact, Match.Partial, Match.None, Match.Partial]);
  });

  it('does match all as partial matches', () => {
    const guess = [4, 4, 5, 5];
    const secretCode = [5, 5, 4, 4];
    const matches = [Match.None, Match.None, Match.None, Match.None];

    const partialMatches = getPartialMatches(matches, guess, secretCode);

    expect(partialMatches).toEqual([Match.Partial, Match.Partial, Match.Partial, Match.Partial]);
  });
});
