import Peg from './Peg';

type DecodeRowProps = {
  guess: number[];
};

const DecodeRow = ({ guess }: DecodeRowProps) => {
  const pegs = guess.map((value, i) => <Peg key={i} value={value} />);

  return <>{pegs}</>;
};

export default DecodeRow;
