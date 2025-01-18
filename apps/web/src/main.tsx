import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SwrProvider } from './lib/swr-config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SwrProvider>
      <App />
    </SwrProvider>
  </React.StrictMode>
);