import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthorizationChecker as isLoggedIn } from './components/Private';
import NotFound from './components/NotFound';
import VerificationPage from './pages/VerificationPage';
import './App.css';


//Pages
const IndexPage = lazy(() => import('./pages/Index.js'));
const LoginPage = lazy(() => import('./pages/Login.js'));
const SignUpPage = lazy(() => import('./pages/SignUp.js'));
const ProjectPage = lazy(() => import('./pages/Project.js'));
const AddTaskPage = lazy(() => import('./pages/AddTaskPage.js'));
const DashboardPage = lazy(() => import('./pages/Dashboard.js'));
const ChatroomPage = lazy(() => import('./pages/Chatroom'));
const TaskPage = lazy(() => import('./pages/TaskPage'));
const NewTaskPage = lazy(() => import('./pages/NewTask'));
const CollboratorsPage = lazy(() => import('./pages/CollboratorsPage'));
const ProfilePage = lazy(() => import('./pages/Profile'));





function App() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/signup" component={SignUpPage} exact />
      <Route path="/dashboard" component={isLoggedIn(DashboardPage)} exact />
      <Route path="/dashboard/addTask" component={isLoggedIn(AddTaskPage)} exact />
      <Route path="/dashboard/project/:id/:name" component={isLoggedIn(ProjectPage)} exact />
      <Route path='/dashboard/chat/:id' component={isLoggedIn(ChatroomPage)} exact />
      <Route path='/dashboard/tasks/:id' component={isLoggedIn(TaskPage)} exact />
      <Route path='/dashboard/newTask/:id' component={isLoggedIn(NewTaskPage)} exact />
      <Route path='/dashboard/collaborators/:id/:name' component={isLoggedIn(CollboratorsPage)} exact />
      <Route path="/contribution/verify" component={VerificationPage} exact />
      <Route path="/dashboard/profile" component={isLoggedIn(ProfilePage)} exact />
      <Route path='*' component={NotFound} exact />
    </Switch>
  );
}

export default App;
