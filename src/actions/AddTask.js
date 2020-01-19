import { ADD_TASK } from "../constants";

export const AddTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});
