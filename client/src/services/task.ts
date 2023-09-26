import { IAddTaskInput } from "@/types/task/input";
import { IGetAllTasksOutput } from "@/types/task/output";
import axios from "axios";

// getAllTask -------------
export const getAllTask = async ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<never[]>>;
}): void => {
  try {
    const response: Promise<IGetAllTasksOutput> = await axios.get(
      "http://localhost:4000/api/tasks"
    );
    setData(response.data.tasks);
  } catch (error) {
    console.log(error);
  }
};

// updateTask -------------
export const updateTask = async ({
  selectedRowId,
  title,
  description,
  priority,
  status,
  setData,
}) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/api/tasks/${selectedRowId}`,
      {
        title,
        description,
        priority,
        status,
      }
    );
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
export const createNewtask = async (body: IAddTaskInput) => {
  try {
    const response = await axios.post("http://localhost:4000/api/tasks", {
      ...body,
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

//Handler Delete
export const handleDeleteButtonClick = async (rowData: any, setData: any) => {
  deleteTask({ rowData, setData });
};

//Handler Update
export const handleUpdateButtonClick = async ({
  selectedRowId,
  title,
  description,
  priority,
  status,
  setData,
}) => {
  updateTask({ selectedRowId, title, description, priority, status, setData });
};

//Handler Edit
export const handleEditButtonClick = (
  rowData: any,
  setTitle: any,
  setDescription: any,
  setPriority: any,
  setStatus: any,
  setSelectedRowId: any
) => {
  setTitle(rowData.title);
  setDescription(rowData.description);
  setPriority(rowData.priority);
  setStatus(rowData.status);
  setSelectedRowId(rowData._id);
};
