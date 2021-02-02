type HintsProps = {
  hints: number[];
};

const Hints = ({ hints }: HintsProps) => (
  <>
    {hints.map((_, i) => (
      <div key={i} className="hint bordered"></div>
    ))}
  </>
);

export default Hints;
