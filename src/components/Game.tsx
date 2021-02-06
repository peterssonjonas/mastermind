import { useReducer } from 'react';
import { generateArray, generateGrid } from '../helpers/generateArray';
import { generateCode } from '../helpers/generateCode';
import { Match } from '../helpers/getMatches';
import { ActionType, mastermind, State } from '../reducers/mastermind';
import CodePegs from './CodePegs';
import DecodingBoard from './DecodingBoard';
import Footer from './Footer';

const turns = 10;
const holes = 4;
const colors = 6;

const initialState: State = {
  guesses: generateGrid(turns, holes, () => -1),
  hints: generateGrid(turns, holes, () => Match.None),
  turn: 0,
  guessIndex: 0,
  secretCode: generateCode(holes, colors),
};

function Game() {
  const colorsArray = generateArray(colors, (_: any, i: number) => i);

  const [state, dispatch] = useReducer(mastermind, initialState);
  const { guesses, hints, turn } = state;

  const onClick = (peg: number) => {
    dispatch({ type: ActionType.Click, payload: { value: peg } });
  };

  return (
    <>
      <h1>Mastermind</h1>
      <DecodingBoard guesses={guesses} hints={hints} currentRow={turn} />
      <CodePegs colors={colorsArray} onClick={onClick} />
      <Footer />
    </>
  );
}

export default Game;
