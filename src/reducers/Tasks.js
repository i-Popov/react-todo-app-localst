import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants";

const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    }
];


const Tasks = (state = TASKS, {id, text, isCompleted, type}) => {
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
        //             task.value = id.value;
        //         }
        //         return task;
        //     });
        // }

        // case EDIT_ITEM: {
        //     const items = state.items.map(item => {
        //         if (item.id === action.payload.modifiedItem.id) {
        //             item.value = action.payload.modifiedItem.value;
        //         }
        //
        //         return item;
        //     });
        //
        //     return { ...state, items, editingItem: {} };
        // }

        default: {
            return state;
        }
    }
};

export default Tasks;
