import DecodeRow from './DecodeRow';
import Hints from './Hints';

type DecodingBoardProps = {
  guesses: number[][];
  hints: number[][];
};

const DecodingBoard = ({ guesses, hints }: DecodingBoardProps) => {
  const decodeRow = guesses.map((guess, i) => (
    <div key={i} className={`row row-${i}`}>
      <DecodeRow guess={guess} />
      <Hints hints={hints[i]} />
    </div>
  ));

  return <div className="decoding-board">{decodeRow}</div>;
};

export default DecodingBoard;
