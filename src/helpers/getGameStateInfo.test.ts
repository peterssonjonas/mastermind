import { GameState } from '../reducers/mastermind';
import { getGameStateInfo } from './getGameStateInfo';

describe('gameStateInfo', () => {
  it('should return game info for victory', () => {
    const expectedGameInfo = {
      stateClass: 'winner',
      title: 'Congratulations',
    };
    const gameState = GameState.Victory;

    expect(getGameStateInfo(gameState)).toEqual(expectedGameInfo);
  });

  it('should return game info for game over', () => {
    const expectedGameInfo = {
      stateClass: 'game-over',
      title: 'Game Over',
    };
    const gameState = GameState.GameOver;

    expect(getGameStateInfo(gameState)).toEqual(expectedGameInfo);
  });

  it('should return empty object when game is in progress', () => {
    const expectedGameInfo = {};
    const gameState = GameState.InProgress;

    expect(getGameStateInfo(gameState)).toEqual(expectedGameInfo);
  });
  
  it('should return empty object when game state is not a valid state', () => {
    const expectedGameInfo = {};
    const gameState: GameState = 99;

    expect(getGameStateInfo(gameState)).toEqual(expectedGameInfo);
  });
});