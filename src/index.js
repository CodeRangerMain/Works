import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Storage from './storage/storage';

let renderApp = (props) => {
  ReactDOM.render(
    < React.StrictMode >
      <App storage={props} />

    </React.StrictMode >,
    document.getElementById('root')
  );
}
renderApp(Storage)
reportWebVitals();
