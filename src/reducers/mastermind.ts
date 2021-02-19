import { checkForWin } from '../helpers/checkForWin';
import { clone } from '../helpers/clone';
import { getMatches } from '../helpers/getMatches';

export enum GameState {
  InProgress,
  Victory,
  GameOver,
}

export enum ActionType {
  Click,
  Reset
}

export interface State {
  guesses: number[][];
  hints: number[][];
  turn: number;
  guessIndex: number;
  secretCode: number[];
  status?: GameState;
}

type Action = { type: ActionType, payload: { value: number } };

export const mastermind = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.Click: {
      const { value } = action.payload;

      const nextState = clone(state);
      const { guesses, hints } = nextState;

      guesses[state.turn][state.guessIndex] = value;

      nextState.guessIndex = (state.guessIndex + 1) % guesses[state.turn].length;

      if (nextState.guessIndex === 0) {
        hints[state.turn] = getMatches(guesses[state.turn], state.secretCode);
        
        const winner = checkForWin(hints[state.turn]);
        if (winner) {
          nextState.status = GameState.Victory;
        } else if (state.turn === state.guesses.length - 1) {
          nextState.status = GameState.GameOver;
        } else {
          nextState.status = GameState.InProgress;
        }
        nextState.turn = state.turn + 1;
      }

      return nextState;
    }
    default:
      return state;
  }
}