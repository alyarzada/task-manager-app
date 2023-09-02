import { useState } from "react";
import AddTask from "./features/addTask";
import Tasks from "./features/tasks/Tasks";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container mx-auto mt-2">
      <AddTask setData={setData} />
      <Tasks data={data} setData={setData} />
    </div>
  );
};

export default App;
