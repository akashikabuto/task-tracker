import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Loader from './components/Loader';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />} >
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

