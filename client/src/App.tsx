import { Suspense, lazy, useState } from "react";
import AddTask from "./features/addTask";
import Tasks from "./features/tasks/Tasks";

// const Tasks = lazy(() => import("./features/tasks/Tasks"));

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container mx-auto mt-2">
      <AddTask setData={setData} />

      <Suspense
        fallback={<h1 className="bg-red-300 h-screen w-full">Loading...</h1>}
      >
        <Tasks data={data} setData={setData} />
      </Suspense>
    </div>
  );
};

export default App;

// console.log([...Array(10).keys()]);
