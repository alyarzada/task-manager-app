import { useEffect } from "react";
import { DataTable } from "../../components/paymet/data-table";
import { getAllTask, getMyTask } from "../../services/task";

const Tasks = ({ data, setData, catchError, setCatchError }) => {
  
  useEffect(() => {
    getMyTask({ setData, catchError, setCatchError });
  }, []);

  const columns = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "priority",
      header: "Priority",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  return <DataTable columns={columns} data={data} setData={setData} />;
};

export default Tasks;
