type DecodeRowProps = {
  guess: number[];
};

const DecodeRow = ({ guess }: DecodeRowProps) => {
  const pegs = guess.map((_, i) => (
    <div
      key={i}
      className={`peg bordered ${i === guess.length - 1 ? 'last' : ''}`}
    ></div>
  ));
  return <>{pegs}</>;
};

export default DecodeRow;
