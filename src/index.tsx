import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';

import './services/firebase';
import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <Toaster/>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);