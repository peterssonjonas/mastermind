import { getGameStateInfo } from '../helpers/getGameStateInfo';
import { GameState } from '../reducers/mastermind';
import Peg from './Peg';

type GameOverlayProps = {
  secretCode: number[];
  status: GameState;
};

const GameOverlay = ({ secretCode, status }: GameOverlayProps) => {
  const { stateClass, title } = getGameStateInfo(status);

  return (
    <div className="overlay">
      <div className={`container ${stateClass}`}>
        <h2>{title}</h2>
        <div className="code">
          {secretCode.map((value, i) => (
            <Peg key={i} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameOverlay;
