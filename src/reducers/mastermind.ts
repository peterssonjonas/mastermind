import { checkForWin } from '../helpers/checkForWin';
import { clone } from '../helpers/clone';
import { generateGrid } from '../helpers/generateArray';
import { generateCode } from '../helpers/generateCode';
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

export const getInitialState = ({turns = 10, holes = 4, colors = 6}): State => ({
  guesses: generateGrid(turns, holes, () => -1),
  hints: generateGrid(turns, holes, () => -1),
  turn: 0,
  guessIndex: 0,
  secretCode: generateCode(holes, colors),
  status: GameState.InProgress,
});

type Action = { type: ActionType, payload: { value?: number, turns?: number, holes?: number, colors?: number } };

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
    case ActionType.Reset: {
      return getInitialState(action.payload);
    }
    default:
      return state;
  }
}