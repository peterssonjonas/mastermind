import { useState, useEffect } from 'react';
import CodePegs from './CodePegs';
import DecodingBoard from './DecodingBoard';
import Footer from './Footer';

function Game() {
  const turns = 10;
  const holes = 4;
  const colors = 6;

  const holesArray: number[] = Array(holes).fill(-1);
  const turnsArray: number[][] = Array(turns).fill(holesArray);
  const colorsArray: number[] = Array(colors)
    .fill(-1)
    .map((_, i) => i);

  const [guesses, setGuesses] = useState(turnsArray);
  const [hints, setHints] = useState(turnsArray);
  const [turn, setTurn] = useState(0);
  const [guessIndex, setGuessIndex] = useState(0);

  useEffect(() => {
    const guess = guesses[turn];
    const isAll = guess.every((g) => g >= 0);

    isAll && setTurn((prevTurn) => prevTurn + 1);
  }, [guesses, turn]);

  const onClick = (peg: number) => {
    setGuesses((oldGuesses) => {
      return oldGuesses.map((row, i) => {
        if (i !== turn) return row;

        return row.map((guess, j) => {
          if (j !== guessIndex) return guess;

          return peg;
        });
      });
    });
    setGuessIndex((oldIndex) => (oldIndex + 1) % holes);
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
