export const ADD_TASK = "ADD_TASK";

const initialState = [];

const taskReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TASK:
         return [...state, action.payload];

      default:
         return state;
   }
};

export default taskReducer;
