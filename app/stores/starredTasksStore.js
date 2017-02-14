import _ from 'lodash';
import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import TasksStore from './tasksStore';

import TasksActionTypes from '../constants/tasksActionTypes';

class StarredTasksStore extends EventEmitter{
    constructor(){
        super();

        this._state = {
            starredTasks: _.filter(TasksStore.getTasks(), { isStarred: true })
        }
    }

    getStarredTasks(){
        return this._state.starredTasks;
    }

    getStarredTasksCount(){
        return this._state.starredTasks.length;
    }

    handleAction(action){
        console.log("action", action.type);
        switch(action.type){
            case TasksActionTypes.STAR_TASK:
            case TasksActionTypes.DELETE_TASK:
            case TasksActionTypes.ADD_TASK:{
                Dispatcher.waitFor([TasksStore.dispatchToken]);
                this._state.starredTasks = _.filter(TasksStore.getTasks(), { isStarred: true });
                this.emit('change');
                break;
            }
        }
    }
}

const starredTasksStore = new StarredTasksStore();
Dispatcher.register(starredTasksStore.handleAction.bind(starredTasksStore));

Dispatcher.unregister(TasksStore.dispatchToken);
TasksStore.dispatchToken = Dispatcher.register(TasksStore.handleAction.bind(TasksStore));

export default starredTasksStore;