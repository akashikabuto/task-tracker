import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
    </Router>
  );
}

export default App;
