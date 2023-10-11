'use client'
import Button from "@/components/common/Button"
import ButtonWithModal from "@/components/common/ButtonWithModal"
import Heading from "@/components/common/Heading"
import Input from "@/components/common/Input"
import Table from "@/components/common/Table/Table"
import TableData from "@/components/common/Table/TableData"
import TableHeader from "@/components/common/Table/TableHeader"
import DeleteWithModal from "@/components/crud-btn-with-modal/Delete"
import { getFormattedDate } from "@/lib/DateFormatter"
import { useIsClient } from "@/lib/hooks"
import { useState } from "react"

export default function SpendingTypeComponent(tableData) {
    const isClient = useIsClient();
    const [spendingTypes, setSpendingTypes] = useState(JSON.parse(JSON.stringify(tableData.spendingTypes)));
    const [formData, setFormData] = useState({ value: '' });

    const fetchData = async () => {
        const response = await fetch('/api/spending-type');
        const data = await response.json();
        setSpendingTypes(data);
    };

    const closeModal = () => {
        // Define a function to close the modal
        // You can add more logic here if needed
        setIsModalOpen(false);
    };

    const addSpendingType = async () => {
        try {
            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ value: '' });
                fetchData();
                closeModal();
            } else {
                window.alert("save data failed!!");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    if (!isClient) {
        return null;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading>Spending Type</Heading>
                <ButtonWithModal buttonTitle="Add" modalTitle="Add Spending Type" closeModal={closeModal}>
                    <div className="flex flex-col gap-3 items-start">
                        <Input labelName="Value" isRequired={true} onChange={(e) => setFormData({ value: e.target.value })}></Input>
                        <Button onClick={addSpendingType}>Add</Button>
                    </div>
                </ButtonWithModal>
            </div>

            <Table>
                <thead>
                    <tr className="text-left">
                        <TableHeader>No.</TableHeader>
                        <TableHeader>Value</TableHeader>
                        <TableHeader>Created At</TableHeader>
                        <TableHeader>Updated At</TableHeader>
                        <TableHeader>Action</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {spendingTypes ? (
                        spendingTypes.map((spendingType) => (
                            <tr key={spendingType.id}>
                                <TableData>{spendingType.id}</TableData>
                                <TableData>{spendingType.value}</TableData>
                                <TableData>{getFormattedDate(spendingType.createdAt)}</TableData>
                                <TableData>{getFormattedDate(spendingType.updatedAt)}</TableData>
                                <TableData>
                                    <DeleteWithModal buttonSize="small" itemId={spendingType.id} buttonType="danger" callParentFunction={fetchData}/>
                                </TableData>
                            </tr>
                        ))
                    ) : (
                        null
                    )}
                </tbody>
            </Table>
        </>
    )
}