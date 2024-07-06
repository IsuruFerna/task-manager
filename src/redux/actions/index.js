import { ADD_TASK } from "../reducers";

export const addTaskAction = (task) => ({
   type: ADD_TASK,
   payload: task,
});
