import { useReducer } from 'react';
import { generateArray } from '../helpers/generateArray';
import {
  ActionType,
  GameState,
  getInitialState,
  mastermind,
} from '../reducers/mastermind';
import CodePegs from './CodePegs';
import DecodingBoard from './DecodingBoard';
import Footer from './Footer';
import GameOverlay from './GameOverlay';

const turns = 10;
const holes = 4;
const colors = 6;

function Game() {
  const colorsArray = generateArray(colors, (_: any, i: number) => i);

  const [state, dispatch] = useReducer(
    mastermind,
    getInitialState({ turns, holes, colors })
  );
  const { guesses, hints, turn, status, secretCode } = state;

  const onClick = (peg: number) => {
    dispatch({ type: ActionType.Click, payload: { value: peg } });
  };

  const reset = () => {
    dispatch({ type: ActionType.Reset, payload: { turns, holes, colors } });
  };

  return (
    <>
      <h1>Mastermind</h1>
      <DecodingBoard guesses={guesses} hints={hints} currentRow={turn} />
      <CodePegs colors={colorsArray} onClick={onClick} />
      <Footer />
      {(status === GameState.Victory || status === GameState.GameOver) && (
        <GameOverlay status={status} secretCode={secretCode} reset={reset} />
      )}
    </>
  );
}

export default Game;
