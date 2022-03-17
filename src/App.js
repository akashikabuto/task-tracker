import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import AddTaskPage from './pages/AddTaskPage';
import Dashboard from './pages/Dashboard';

import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Project from './pages/Project';


function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/dashboard/addTask" component={AddTaskPage} exact />
          <Route path="/dashboard/project/:id" component={Project} exact />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
