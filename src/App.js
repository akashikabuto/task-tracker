import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
