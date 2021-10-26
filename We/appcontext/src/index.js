import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Theme1 from './Context/ThemeContext';
import Auth1 from './Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <Auth1>
    <Theme1>
      <App />
      </Theme1>
      </Auth1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
