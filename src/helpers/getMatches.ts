import { getExactMatches } from './getExactMatches';
import { getPartialMatches } from './getPartialMatches';

export enum Match {
  None,
  Partial,
  Exact,
}

export const getMatches = (codeGuess: number[], secretCode: number[]) => {
  const exactMatches = getExactMatches(codeGuess, secretCode);
  const matches = getPartialMatches([...exactMatches], codeGuess, secretCode);

  return matches.sort().reverse();
};