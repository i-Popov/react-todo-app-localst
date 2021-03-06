import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants";
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'react-todo-app'});

if (!TASKS || !TASKS.Tasks || !TASKS.Tasks.length) {
    TASKS = {
        Tasks: [],
    }
}

const Tasks = (state = TASKS.Tasks, {id, text, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK: {
            return [ ...state, {id, text, isCompleted} ];
        }

        case DELETE_TASK: {
            return [...state].filter(Task => Task.id !== id);
        }

        case COMPLETE_TASK: {
            return [...state].map(Task => {
                if(Task.id === id) {
                    Task.isCompleted = !Task.isCompleted;
                }
                return Task;
            });
        }

        // case EDIT_TASK: {
        //     return [...state].map(task => {
        //         if(task.id === id) {
        //             task.value = ;
        //         }
        //         return task;
        //     });
        // }

        default: {
            return state;
        }
    }
};

export default Tasks;
