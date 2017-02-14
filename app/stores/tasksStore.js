import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';

import TasksActionTypes from '../constants/tasksActionTypes';

class TasksStore extends EventEmitter{
    constructor(){
        super();

        this._state = {
            isLoading: false,
            tasks: [
                {
                    id: 1,
                    name: 'Task 1 - from store',
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
            ]
        }
    }

    getTasks(){
        return this._state.tasks;
    }

    addTask(task){
        const id = Date.now();
        this._state.tasks.push({
            id: id,
            name: task.name,
            priority: task.priorty,
            isStarred: task.isStarred
        })
    }

    starTask(id){
        const index = _.findIndex(this._state.tasks, { id: id });
        if(index > -1)
            this._state.tasks[index].isStarred = !this._state.tasks[index].isStarred;
    }

    deleteTask(id){
        this._state.tasks.splice(_.findIndex(this._state.tasks, { id: id }), 1);
    }

    isLoading(){
        return this._state.isLoading;
    }
    
    handleAction(action){
        console.log("action", action.type);
        switch(action.type){
            case TasksActionTypes.ADD_TASK:{
                this.addTask(action.task);
                this.emit('change');
                break;
            }
            case TasksActionTypes.STAR_TASK:{
                this.starTask(action.id);
                this.emit('change');
                break;
            }
            case TasksActionTypes.DELETE_TASK:{
                this.deleteTask(action.id);
                this.emit('change');
                break;
            }
            case TasksActionTypes.FETCH_TASK:{
                this._state.isLoading = true;
                this.emit('change');
                break;
            }
            case TasksActionTypes.RECEIVE_TASK:{
                this._state.isLoading = false;
                this._state.tasks = action.tasks;
                this.emit('change');
                break;
            }
        }
    }
}

const tasksStore = new TasksStore();
tasksStore.dispatchToken = Dispatcher.register(tasksStore.handleAction.bind(tasksStore));

window.Dispatcher = Dispatcher;
export default tasksStore;