import { clone } from "../helpers/clone";

export enum ActionType {
  Click
}

export interface State {
  guesses: number[][];
  hints: number[][];
  turn: number;
  guessIndex: number;
}

type Action = { type: ActionType.Click, payload: { value: number } };

export const mastermind = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.Click: {
      const { value } = action.payload;

      const nextState = clone(state);
      const { guesses } = nextState;

      guesses[state.turn][state.guessIndex] = value;

      nextState.guessIndex = (state.guessIndex + 1) % guesses[state.turn].length;

      if (nextState.guessIndex === 0) {
        nextState.turn = state.turn + 1;
      }

      return nextState;
    }
    default:
      return state;
  }
}