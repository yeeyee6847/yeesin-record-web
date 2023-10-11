'use client'
import CreateButton from "@/components/table/action-btn-modal/Create";
import TableCellDeleteButton from "@/components/table/action-btn-modal/Delete";
import TableCellUpdateButton from "@/components/table/action-btn-modal/Update";
import { useEffect, useState } from "react";

export default function SpendingTypeTable() {

    const [datas, setDatas] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('/api/spending-type');
        const data = await response.json();
        setDatas(data);
    };

    const afterModalAction = () => {
        fetchData();
    }

    

    return (
        <div>
            <CreateButton afterModalAction={afterModalAction} />

            <div className='w-full overflow-auto'>
                <table className='table-auto border-collapse border border-slate-500 bg-slate-800 w-full'>
                    <thead>
                        <tr className='text-left'>
                            <th className='border border-slate-300 px-3 py-3'>No.</th>
                            <th className='border border-slate-300 px-3 py-3'>Value</th>
                            <th className='border border-slate-300 px-3 py-3 hidden sm:table-cell'>Created Date</th>
                            <th className='border border-slate-300 px-3 py-3 hidden sm:table-cell'>Updated Date</th>
                            <th className='border border-slate-300 px-3 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={data.id}>
                                <td className='border border-slate-300 p-2'>{index + 1}</td>
                                <td className='border border-slate-300 p-2'>{data.value}</td>
                                <td className='border border-slate-300 p-2 hidden sm:table-cell'>{data.createdAt}</td>
                                <td className='border border-slate-300 p-2 hidden sm:table-cell'>{data.updatedAt}</td>
                                <td className='border border-slate-300 p-2'>
                                    <div className='flex gap-2'>
                                        <TableCellUpdateButton dataId={data.id} afterModalAction={afterModalAction}/>
                                        <TableCellDeleteButton dataId={data.id} afterModalAction={afterModalAction}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}