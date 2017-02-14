import TasksCSS from './tasks.css';

import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Glyphicon } from 'react-bootstrap';

import * as TasksActions from '../../actions/tasksActions';

export default class TaskForm extends React.Component{
    constructor(){
        super();
        this.state = this.getInitialState();
    }

    getInitialState(){
        return {
                name: '',
                priority: 'Low',
                isStarred: false           
        };
    }

    handleAddTask(){
        TasksActions.addTask(this.state.name, this.state.priority, this.state.isStarred);
        console.log("AddTask", this.state.name, this.state.priority, this.state.isStarred);
        this.setState(this.getInitialState());
    }

    handleChangeName(e){
        this.setState({ name: e.target.value });
    }

    handleChangePriority(e){
        this.setState({ priority: e.target.value });
    }

    handleChangeStar(){
        this.setState({ isStarred: !this.state.isStarred });
    }

    render(){
        return(
            <form>
                <FormGroup>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter task name"
                        value={this.state.name}
                        onChange={this.handleChangeName.bind(this)}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Priority:</ControlLabel>
                    <FormControl
                        componentClass="select"
                        value={this.state.priority}
                        onChange={this.handleChangePriority.bind(this)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </FormControl>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.handleChangeStar.bind(this)}>
                        <Glyphicon glyph="star" className={ this.state.isStarred ? "starred" : ""}></Glyphicon> Star
                    </Button>
                </FormGroup>
                <Button onClick={this.handleAddTask.bind(this)}>Add</Button>
            </form>
        );
    }
};