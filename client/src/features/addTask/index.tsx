import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { createNewtask } from "../../services/task";

const AddTask = ({ setData, catchError, setCatchError }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const addTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createNewtask({
      title,
      description,
      priority,
      status,
      setData,
      setCatchError,
    });
    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("");
  };

  const catchErrorFunc = () => {
    if (catchError) {
      setTimeout(() => {
        setCatchError(null);
      }, 2000);
      return (
        <div>
          <p className="text-red-600">{catchError}</p>
        </div>
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="mb-2">
        <Button variant="outline">Add task</Button>
      </DialogTrigger>

      {catchError ? catchErrorFunc() : null}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4 py-4" onSubmit={addTaskSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              className="col-span-3"
              placeholder="Title"
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              placeholder="Description"
              value={description}
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Priority
            </Label>
            <Select
              onValueChange={(e: any) => {
                setPriority(e);
              }}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Status
            </Label>
            <Select
              onValueChange={(e: any) => {
                setStatus(e);
              }}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">Todo</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <DialogTrigger>
              <Button type="submit">Save changes</Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
