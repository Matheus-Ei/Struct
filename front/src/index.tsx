// Libraries
import Providers from 'utils/Providers';
import ReactDOM from 'react-dom/client';
import React from 'react';

// Local
import App from './App';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
