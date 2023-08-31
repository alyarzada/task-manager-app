import React from 'react';
import AddTask from './features/addTask';
import Tasks from './features/tasks/Tasks';


const App = () => {
  return (
    <div className="container mx-auto mt-2">
      <AddTask />
      <div className="grid grid-cols-3 gap-4 mt-2">
        <Tasks />
        
      </div>
    </div>
  )
}

export default App