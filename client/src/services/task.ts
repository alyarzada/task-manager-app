import { Api } from "../api/Api";
import { IAddTaskInput } from "@/types/task/input";
import { IGetAllTasksOutput } from "@/types/task/output";

// getAllTask -------------
export const getAllTask = async ({setData}: {
  setData: React.Dispatch<React.SetStateAction<never[]>>;
}): void => {
  try {
    const response: Promise<IGetAllTasksOutput> = await Api().get("/api/tasks/all");
    setData(response.data.tasks);
  } catch (error) {
    console.log(error);
  }
};

// getMyTask -------------
export const getMyTask = async ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<never[]>>;
}): void => {
  try {
    const response: Promise<IGetAllTasksOutput> = await Api().get("/api/tasks");
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
    const response = await Api().patch(
      `/api/tasks/${selectedRowId}`,
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
    const response = await Api().post("/api/tasks", {
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
    const response = await Api().delete(
      `http://localhost:4000/api/tasks/${rowData._id}`
    );
    setData((prev) => prev.filter((item) => item._id !== response.data.id));
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
function setData(arg0: (prev: any) => any[]) {
  throw new Error("Function not implemented.");
}

