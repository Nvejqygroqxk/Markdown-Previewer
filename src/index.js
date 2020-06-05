import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import NameForm from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <NameForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
