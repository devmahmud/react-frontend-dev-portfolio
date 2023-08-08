import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/400-italic.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/500-italic.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/600-italic.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
