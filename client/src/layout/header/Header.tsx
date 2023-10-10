import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Api } from "../../api/Api";

const Header = ({ setData }) => {
  const [showMyTasks, setShowMyTasks] = useState(true)
  const [showAllTasks, setShowAllTasks] = useState(false);

  const AllTasks = async () => {
    try {
      const response = await Api().get('/api/tasks/all');
      setData(response.data.tasks);
      setShowMyTasks(false)
      setShowAllTasks(true)
    } catch (error) {
      console.log(error);
    }
  }

  const MyTasks = async () => {
    try {
      const response = await Api().get('/api/tasks');
      setData(response.data.tasks)
      setShowMyTasks(true)
      setShowAllTasks(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="pt-6 pb-6 flex justify-between">
      <div>
        <Button className="mr-5" onClick={AllTasks} disabled={showAllTasks}>All Tasks</Button>
        <Button onClick={MyTasks} disabled={showMyTasks}>My Tasks</Button>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium mr-3">Filankes Filankesov</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
};

export default Header;