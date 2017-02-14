import BootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import Layout from './components/layout/layout';
import Dashboard from './components/dashboard/dashboard';
import TasksPage from './components/tasks/tasksPage';

class KanbanApplication extends React.PureComponent{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Dashboard} />
          <Route path="Dashboard" component={Dashboard} />
          <Route path="Tasks" component={TasksPage} />
          <Redirect from="*" to="/404" />
        </Route>
      </Router>
    );
  }
};

ReactDOM.render(<KanbanApplication />, document.getElementById('root'));