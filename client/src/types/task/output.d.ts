export interface IAddTaskOutput {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "progress" | "completed";
  createdAt?: Date;
  updatedAt?: Date;
}

interface ITask {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "progress" | "completed";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IGetAllTasksOutput {
  data: {
    tasks: Array<ITask>;
  };
}

export interface IDeleteTaskOutput {
  id: string;
}

export interface IUpdateTaskOutput extends IAddTaskInput {
  id: string;
}
