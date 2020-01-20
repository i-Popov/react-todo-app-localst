import {DELETE_TASK} from "../constants";

export const DeleteTask = id => ({
    type: DELETE_TASK,
    id
});
