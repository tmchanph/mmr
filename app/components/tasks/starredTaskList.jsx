import TasksCSS from './tasks.css';

import React from 'react';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';

import StarredTasksStore from '../../stores/starredTasksStore';

export default class StarredTaskList extends React.Component{
    constructor(){
        super();
        this.setTasksFromStore = this.setTasksFromStore.bind(this);
        this.state = {
            tasks: []
        };
    }

    componentWillMount(){
        this.setTasksFromStore();
        StarredTasksStore.on('change', this.setTasksFromStore);
    }

    setTasksFromStore(){
        this.setState({ tasks: StarredTasksStore.getStarredTasks() });
    }
    
    render(){
        return(
            <ListGroup>
                {this.state.tasks.map((task)=>{
                    return(
                        <ListGroupItem key={task.id}>
                            {task.name}
                            <br/>
                            <Label bsStyle="primary">{task.priority}</Label>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    }
};