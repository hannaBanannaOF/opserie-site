import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-M8MSBFP'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
