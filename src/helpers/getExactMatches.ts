import { Match } from "./getMatches";

export const getExactMatches = (codeGuess: number[], secretCode: number[]) => codeGuess.reduce((acc: number[], guess, i) => {
    return [
      ...acc,
      guess === secretCode[i] ? Match.Exact : Match.None
    ];
  }, []);