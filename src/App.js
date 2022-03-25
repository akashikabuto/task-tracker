import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import Loader from './components/Loader';
import NotFound from './components/NotFound';


const IndexPage = lazy(() => import('./pages/Index.js'));
const LoginPage = lazy(() => import('./pages/Login.js'));
const SignUpPage = lazy(() => import('./pages/SignUp.js'));
const ProjectPage = lazy(() => import('./pages/Project.js'));
const AddTaskPage = lazy(() => import('./pages/AddTaskPage.js'));
const DashboardPage = lazy(() => import('./pages/Dashboard.js'));


function App() {
  return (
    <Suspense fallback={<Loader />} >
      <Provider store={store} >
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route path="/dashboard" component={DashboardPage} exact />
          <Route path="/dashboard/addTask" component={AddTaskPage} exact />
          <Route path="/dashboard/project/:id" component={ProjectPage} exact />
          <Route path='*' component={NotFound} exact />
        </Switch>
      </Provider>
    </Suspense>
  );
}

export default App;
