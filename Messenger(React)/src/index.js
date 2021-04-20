import storage from './components/Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let renderDom = (state, addPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}
renderDom(storage.state, storage.addPost)
storage.observer(renderDom);

window.storage = storage
export default renderDom;
