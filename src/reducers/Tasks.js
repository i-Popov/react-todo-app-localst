import { ADD_TASK, DELETE_TASK } from "../constants";

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
            return [...state].filter(task => task.id !== id);
        }

        default: {
            return state;
        }
    }
};

export default Tasks;
