import { ADD_TASK, MARK_AS_DONE, SELECT_TASK } from "../reducers";

export const addTaskAction = (task) => ({
   type: ADD_TASK,
   payload: task,
});

export const selectTaskAction = (task) => ({
   type: SELECT_TASK,
   payload: task,
});

export const taskMarkAsDoneAction = (index) => ({
   type: MARK_AS_DONE,
   payload: index,
});
