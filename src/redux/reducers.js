const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case 'EDIT_TASK':
      const editedTasks = [...state.tasks];
      const editedTask = prompt("Edit your task", editedTasks[action.payload]);
      if (editedTask !== null) {
        editedTasks[action.payload] = editedTask;
      }
      return {
        ...state,
        tasks: editedTasks,
      };
    default:
      return state;
  }
};

export default rootReducer;
