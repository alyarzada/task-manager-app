import React, { useEffect } from "react";
import { DataTable } from "../../components/paymet/data-table";
import axios from "axios";
import { getAllTask } from "../../services/task";

const Tasks = ({ data, setData, catchError, setCatchError }) => {


  useEffect(() => {
    getAllTask({ setData, catchError, setCatchError });
  }, []);

  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
    },
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
