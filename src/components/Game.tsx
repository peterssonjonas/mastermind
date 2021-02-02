import { useState } from 'react';
import DecodingBoard from './DecodingBoard';
import Footer from './Footer';

function Game() {
  const turns = 10;
  const holes = 4;

  const holesArray: number[] = Array(holes).fill(-1);
  const turnsArray: number[][] = Array(turns).fill(holesArray);

  const [guesses, setGuesses] = useState(turnsArray);
  const [hints, setHints] = useState(turnsArray);

  return (
    <>
      <h1>Mastermind</h1>
      <DecodingBoard guesses={guesses} hints={hints} />
      <Footer />
    </>
  );
}

export default Game;
