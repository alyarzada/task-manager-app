export interface IAddTaskInput {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "progress" | "completed";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeleteTaskInput {
  id: string;
}

export interface IUpdateTaskInput extends IAddTaskInput, IDeleteTaskInput {
  id: string;
}
