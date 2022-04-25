import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Loader from './components/Loader';
import './i18n';
import { Provider } from 'react-redux';
import { store } from './redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />} >
      <Router>
        <Provider store={store} >
          <DndProvider backend={Backend} >
            <App />
          </DndProvider>
        </Provider>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

