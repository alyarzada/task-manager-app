import { useState } from "react";
import AddTask from "../../features/addTask/index";
import Tasks from "../../features/tasks/Tasks";
import Layout from "../../layout/index";
const Home = () => {
    const [data, setData] = useState([]);
    const [catchError, setCatchError] = useState(null)
    return (
        <div className="container mx-auto mt-2">
            <Layout />
            <AddTask setData={setData} catchError={catchError} setCatchError={setCatchError} />
            <Tasks data={data} setData={setData} catchError={catchError} setCatchError={setCatchError} />
        </div>
    );
};

export default Home;
