import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../redux/actions';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    dispatch(editTask(index));
  };

  return (
    <div className="task-list list-group">
      {tasks.map((task, index) => (
        <div key={index} className="task-item list-group-item d-flex justify-content-between align-items-center">
          <span>{task}</span>
          <div>
            <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEditTask(index)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
