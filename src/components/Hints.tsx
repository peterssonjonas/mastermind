import { Match } from '../helpers/getMatches';

type HintsProps = {
  hints: Match[];
};

const Hints = ({ hints }: HintsProps) => (
  <>
    {hints.map((hint, i) => (
      <div key={i} className="hint bordered" data-value={hint}></div>
    ))}
  </>
);

export default Hints;
