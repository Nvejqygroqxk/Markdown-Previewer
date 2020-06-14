import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Kek from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Kek />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
