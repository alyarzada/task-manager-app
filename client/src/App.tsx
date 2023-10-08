import { useState } from "react";
import AddTask from "./features/addTask";
import Tasks from "./features/tasks/Tasks";
import Layout from "./layout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  const [data, setData] = useState([]);
  const [catchError, setCatchError] = useState(null);

  return (
    <div className="container mx-auto mt-2">
      <Toaster />
      <Layout />
      <AddTask
        setData={setData}
        catchError={catchError}
        setCatchError={setCatchError}
      />
      <Tasks
        data={data}
        setData={setData}
        catchError={catchError}
        setCatchError={setCatchError}
      />
    </div>
  );
};

export default App;
