import { ADD_TASK, DELETE_TASK, MARK_AS_DONE, SELECT_TASK } from "../reducers";

export const addTaskAction = (task) => ({
   type: ADD_TASK,
   payload: task,
});

export const selectTaskAction = (index) => ({
   type: SELECT_TASK,
   payload: index,
});

export const taskMarkAsDoneAction = (index) => ({
   type: MARK_AS_DONE,
   payload: index,
});

export const deleteTaskAction = (task) => ({
   type: DELETE_TASK,
   payload: task,
});
