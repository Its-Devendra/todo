export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (index) => ({
  type: 'DELETE_TASK',
  payload: index,
});

export const toggleTask = (index) => ({
  type: 'TOGGLE_TASK',
  payload: index,
});


export const editTask = (updatedTask) => ({
  type: 'EDIT_TASK',
  payload: updatedTask,
});
