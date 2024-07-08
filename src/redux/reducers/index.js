export const ADD_TASK = "ADD_TASK";
export const SELECT_TASK = "SELECT_TASK";
export const MARK_AS_DONE = "MARK_AS_DONE";

const initialState = {
   taskList: [],
   selected: "",
};

const taskReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TASK:
         return {
            ...state,
            taskList: [...state.taskList, action.payload],
         };

      case SELECT_TASK:
         return {
            ...state,
            selected: action.payload,
         };

      case MARK_AS_DONE:
         return {
            ...state,
            taskList: state.taskList.map((task, i) =>
               i === action.payload ? { ...task, done: !task.done } : task
            ),
         };

      default:
         return state;
   }
};

export default taskReducer;
