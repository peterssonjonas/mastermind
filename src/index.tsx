import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './components/Game';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
