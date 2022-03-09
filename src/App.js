import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
