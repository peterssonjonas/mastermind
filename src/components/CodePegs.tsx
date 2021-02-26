type CodePegsProps = {
  colors: number[];
  onClick: (peg: number) => void;
};

const CodePegs = ({ colors, onClick }: CodePegsProps) => (
  <div className="code-pegs">
    {colors.map((color) => (
      <button
        key={color}
        className="peg circle"
        data-value={color}
        onClick={() => onClick(color)}
        aria-label={`${color}`}
      ></button>
    ))}
  </div>
);

export default CodePegs;
