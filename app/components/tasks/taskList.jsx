import TasksCSS from './tasks.css';

import React from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

import TasksStore from '../../stores/tasksStore';

import * as TasksActions from '../../actions/tasksActions';

const tasks = [
    {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 Description',
        priority: 'Low',
        status: 'Pending',
        isStarred: false
    },
    {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 Description',
        priority: 'Medium',
        status: 'In Progress',
        isStarred: true
    },
    {
        id: 3,
        name: 'Task 3',
        description: 'Task 3 Description',
        priority: 'High',
        status: 'Completed',
        isStarred: false
    }
];

export default class TaskList extends React.Component{
    constructor(){
        super();

        this.setTasksFromStore = this.setTasksFromStore.bind(this);
        this.state ={
            tasks: TasksStore.getTasks()
        };
    }

    componentWillMount(){
        TasksStore.on('change', this.setTasksFromStore);
        console.log('count', TasksStore.listenerCount('change'));
    }

    componentWillUnmount(){
        TasksStore.removeListener('change', this.setTasksFromStore);
    }

    setTasksFromStore(){
        if(TasksStore.isLoading())
            this.setState({ tasks: []});
        else
            this.setState({ tasks: TasksStore.getTasks()});
    }

    handleStarTask(taskId){
        console.log("StarTask", taskId);
        TasksActions.starTask(taskId);
    }

    handleRemoveTask(taskId){
        console.log("RemoveTask", taskId);
        TasksActions.deleteTask(taskId);
    }

    handleRefreshTasks(){
        TasksActions.refreshTasks();
    }

    render(){
        return(
            <div>
                <button onClick={this.handleRefreshTasks.bind(this)}>Refresh from Server</button>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tasks.map((task) =>{
                        return (
                            <tr key={task.id}>
                                <td>
                                    <a href="#" onClick={this.handleStarTask.bind(this, task.id)}>
                                        <Glyphicon glyph="star" className={ task.isStarred ? "starred" : ""} />
                                    </a>
                                </td>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                <td className="text-center">
                                    <a href="#" onClick={this.handleRemoveTask.bind(this, task.id)}>
                                        <Glyphicon glyph="remove" className="alert-danger" />
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            </div>
        );
    }
};