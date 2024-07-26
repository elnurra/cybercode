import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Header from './app/components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);
