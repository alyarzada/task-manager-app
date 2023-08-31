import React from 'react';
import AddTask from './features/addTask';
import Tasks from './features/tasks/Tasks';


const App = () => {
  return (
    <div className="container mx-auto mt-2">
      <AddTask />
      <Tasks />
    </div>
  )
}

export default App