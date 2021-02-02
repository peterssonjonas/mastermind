import DecodeRow from './DecodeRow';
import Hints from './Hints';

type DecodingBoardProps = {
  guesses: number[][];
  hints: number[][];
  currentRow: number;
};

const DecodingBoard = ({ guesses, hints, currentRow }: DecodingBoardProps) => (
  <div className="decoding-board">
    {guesses.map((guess, i) => (
      <div
        key={i}
        className={`row row-${i} ${currentRow === i ? 'active' : ''}`}
      >
        <DecodeRow guess={guess} />
        <span className="grid-spacer"></span>
        <Hints hints={hints[i]} />
      </div>
    ))}
  </div>
);

export default DecodingBoard;
