import React, { useEffect } from "react";
import { DataTable } from "../../components/paymet/data-table";
import axios from "axios";

const Tasks = ({ data, setData }) => {
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tasks");
      console.log("response", response);
      setData(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
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
