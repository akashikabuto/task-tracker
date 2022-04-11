import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import NotFound from './components/NotFound';
import { AuthorizationChecker as isLoggedIn } from './components/Private';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';




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


function App() {
  return (
    <Provider store={store} >
      <DndProvider backend={Backend} >
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route path="/dashboard" component={isLoggedIn(DashboardPage)} exact />
          <Route path="/dashboard/addTask" component={isLoggedIn(AddTaskPage)} exact />
          <Route path="/dashboard/project/:id" component={isLoggedIn(ProjectPage)} exact />
          <Route path='/dashboard/chat/:id' component={isLoggedIn(ChatroomPage)} exact />
          <Route path='/dashboard/tasks' component={isLoggedIn(TaskPage)} exact />
          <Route path='/dashboard/newTask' component={isLoggedIn(NewTaskPage)} exact />
          <Route path='/dashboard/collaborators/:id' component={isLoggedIn(CollboratorsPage)} exact />
          <Route path='*' component={NotFound} exact />
        </Switch>
      </DndProvider>
    </Provider>
  );
}

export default App;
