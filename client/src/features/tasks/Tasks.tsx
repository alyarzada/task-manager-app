import React, { useEffect, useState } from 'react';
import { DataTable } from '../../components/paymet/data-table';

const Tasks = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const columns = [
        {
            accessorKey: "userId",
            header: "Title",
        },
        {
            accessorKey: "id",
            header: "Description",
        },
        {
            accessorKey: "title",
            header: "Priority",
        },
        {
            accessorKey: "title",
            header: "Status",
        },
    ];

    return (
        <DataTable columns={columns} data={data} />
    )
}

export default Tasks;
