type PegProps = {
  value: number;
};

const Peg = ({ value }: PegProps) => (
  <div className="peg bordered" data-value={value}></div>
);

export default Peg;
