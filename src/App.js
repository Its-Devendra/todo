import React from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4">To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
