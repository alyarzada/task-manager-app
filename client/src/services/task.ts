import axios from "axios";

// getAllTask -------------
export const getAllTask = async ({ setData }) => {
    try {
        const response = await axios.get("http://localhost:4000/api/tasks");
        setData(response.data.tasks);
    } catch (error) {
        console.log(error);
    }
};

// updateTask -------------
export const updateTask = async ({ selectedRowId, title, description, priority, status, setData }) => {
    try {
        const response = await axios.patch(`http://localhost:4000/api/tasks/${selectedRowId}`, {
            title,
            description,
            priority,
            status,
        });
        setData((prevData) => {
            return prevData.map((task) => {
                if (task._id === selectedRowId) {
                    return response.data.task;
                }
                return task;
            });
        });
    } catch (error) {
        console.log(error);
    }
};

// createNewtask -------------
export const createNewtask = async ({ title, description, priority, status, setData }) => {
    try {
        const response = await axios.post("http://localhost:4000/api/tasks", {
            title,
            description,
            priority,
            status,
        });
        setData((prev) => [...prev, response.data.task]);
    } catch (error) {
        console.log(error);
    }
};

// deleteTask -------------
export const deleteTask = async ({ setData, rowData }) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/api/tasks/${rowData._id}`
        );
        setData((prev) => prev.filter((item) => item._id !== response.data.id));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
