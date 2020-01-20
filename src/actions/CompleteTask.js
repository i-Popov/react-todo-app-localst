import {COMPLETE_TASK} from "../constants";

export const CompleteTask = id => ({
    type: COMPLETE_TASK,
    id
});
