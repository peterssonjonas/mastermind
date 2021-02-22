import { getGameStateInfo } from '../helpers/getGameStateInfo';
import { GameState } from '../reducers/mastermind';
import Peg from './Peg';

type GameOverlayProps = {
  secretCode?: number[];
  status: GameState;
  reset: () => void;
};

const GameOverlay = ({ secretCode, status, reset }: GameOverlayProps) => {
  const { stateClass, title } = getGameStateInfo(status);

  return (
    <div className="overlay">
      <div className={`container ${stateClass}`}>
        <h2>{title}</h2>
        {secretCode && (
          <div className="code">
            {secretCode.map((value, i) => (
              <Peg key={i} value={value} />
            ))}
          </div>
        )}
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default GameOverlay;
