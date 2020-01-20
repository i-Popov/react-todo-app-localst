import { CHANGE_FILTER } from "../constants";

export const ChangeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter,
});
