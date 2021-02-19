import { GameState } from '../reducers/mastermind';

export const getGameStateInfo = (state: GameState) => {
  switch(state) {
    case GameState.Victory:
      return {
        stateClass: 'winner',
        title: 'Congratulations',
      };
    case GameState.GameOver:
      return {
        stateClass: 'game-over',
        title: 'Game Over',
      };
    default:
      return {};
  }
}