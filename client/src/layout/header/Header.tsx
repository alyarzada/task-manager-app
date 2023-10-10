import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Api } from "../../api/Api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputFile } from "@/components/ui/inputFile";

const Header = ({ setData }) => {
  const [showMyTasks, setShowMyTasks] = useState(true);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [avatar, setAvatar] = useState("");

  const AllTasks = async () => {
    try {
      const response = await Api().get("/api/tasks/all");
      setData(response.data.tasks);
      setShowMyTasks(false);
      setShowAllTasks(true);
    } catch (error) {
      console.log(error);
    }
  };

  const MyTasks = async () => {
    try {
      const response = await Api().get("/api/tasks");
      setData(response.data.tasks);
      setShowMyTasks(true);
      setShowAllTasks(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    const user_id = JSON.parse(localStorage.getItem("userData")).user_id;

    try {
      const response = await Api().patch(
        `/api/auth/changeAvatar/${user_id}`,
        formData
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-6 pb-6 flex justify-between">
      <div>
        <Button className="mr-5" onClick={AllTasks} disabled={showAllTasks}>
          All Tasks
        </Button>
        <Button onClick={MyTasks} disabled={showMyTasks}>
          My Tasks
        </Button>
      </div>

      <Dialog>
        <DialogTrigger>
          <div className="flex justify-between items-center cursor-pointer">
            <p className="font-medium mr-3">Filankes Filankesov</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DialogTrigger>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="text-center mb-6">
                User Profile
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <InputFile
                onChange={(e) => {
                  setAvatar(e.target.files[0]);
                }}
              />
              <Button className="mx-auto mt-3" type="submit">
                Change Avatar
              </Button>
            </DialogDescription>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
