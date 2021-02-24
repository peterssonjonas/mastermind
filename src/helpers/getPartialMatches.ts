import { Match } from './getMatches';

export const getPartialMatches = (matches: Match[], codeGuess: number[], secretCode: number[]) => {
  const alreadyMatched = matches.map(match => match === Match.Exact);
  const secretMatched = [...alreadyMatched];

  codeGuess.forEach((guess, i) => {
    if (alreadyMatched[i]) return;

    secretCode.forEach((code, j) => {
      if (secretMatched[j]) return;
      if (matches[i] !== Match.None && alreadyMatched[i]) return;
      if (guess !== code) return;
      
      matches[i] = Match.Partial;
      alreadyMatched[i] = secretMatched[j] = true;
    });
  });

  return matches;
}