import React from 'react';
import TaskList from '../tasks/taskList';
import TaskForm from '../tasks/taskForm';
import StarredTaskBadge from '../tasks/starredTaskBadge';
import StarredTaskList from '../tasks/starredTaskList';

export default class Dashboard extends React.PureComponent{
  render(){
    return(
        <div className="row">
            <div className="col-lg-4">
                <TaskList />
            </div>
                <div className="col-lg-4">
                <TaskForm />
            </div>
                <div className="col-lg-4">
                <StarredTaskList />
            </div>
        </div>
    );
  }
};