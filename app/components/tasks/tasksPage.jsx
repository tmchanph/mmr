import React from 'react';
import TaskList from '../tasks/taskList';

export default class TasksPage extends React.PureComponent{
  render(){
    return(
        <div className="row">
            <div className="col-lg-12">
                <TaskList />
            </div>
        </div>
    );
  }
};