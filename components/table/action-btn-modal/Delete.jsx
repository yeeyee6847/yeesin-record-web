'use client'
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { useState } from "react";

export default function TableCellDeleteButton({ dataId, afterModalAction }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const deleteData = async () => {
        try {
            const response = await fetch('/api/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataId),
            });

            if (response.ok) {
                setIsModalOpen(false);
                afterModalAction();
            } else {
                window.alert("Delete failed");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <button onClick={openModal}
                className="border rounded px-2 py-1 bg-red-700 hover:bg-red-500">
                Delete
            </button>

            <Modal title="Delete" isModalOpen={isModalOpen} onCloseModal={closeModal}
                customClass='container fixed m-auto inset-0 border rounded bg-slate-900 h-36 w-80 px-3 py-2 sm:px-5 sm:py-3'>
                <div className="flex gap-2 justify-end">
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button onClick={deleteData}>Delete</Button>
                </div>
            </Modal>

        </>
    )
}