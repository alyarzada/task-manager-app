import { Suspense, useState } from "react";
import AddTask from "./features/addTask";
import Tasks from "./features/tasks/Tasks";
import { Input } from "./components/ui/input";
import CustomComponent from "./components/ui/CustomComponent";

// const Tasks = lazy(() => import("./features/tasks/Tasks"));

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container mx-auto mt-2">
      {/* <AddTask setData={setData} />

      <Suspense
        fallback={<h1 className="bg-red-300 h-screen w-full">Loading...</h1>}
      >
        <Tasks data={data} setData={setData} />
      </Suspense> */}

      {/* <input type="text" /> */}

      <Input showInput />

      <CustomComponent id={1} name="gojndskj" />
    </div>
  );
};

export default App;
