import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import './i18n';






const IndexPage = lazy(() => import('./pages/Index.js'));
const LoginPage = lazy(() => import('./pages/Login.js'));
const SignUpPage = lazy(() => import('./pages/SignUp.js'));
const ProjectPage = lazy(() => import('./pages/Project.js'));
const AddTaskPage = lazy(() => import('./pages/AddTaskPage.js'));
const DashboardPage = lazy(() => import('./pages/Dashboard.js'));


function App() {
  return (
    <Suspense fallback={<div>Loading....</div>} >
      <Provider store={store} >
        <Router>
          <Switch>
            <Route path="/" component={IndexPage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/signup" component={SignUpPage} exact />
            <Route path="/dashboard" component={DashboardPage} exact />
            <Route path="/dashboard/addTask" component={AddTaskPage} exact />
            <Route path="/dashboard/project/:id" component={ProjectPage} exact />
          </Switch>
        </Router>
      </Provider>
    </Suspense>

  );
}

export default App;
