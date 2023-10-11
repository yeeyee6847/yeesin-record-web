'use client'
import { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";

export default function DeleteWithModal({ itemId, buttonSize, buttonType, callParentFunction }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const deleteItem = async () => {
        try {
            const response = await fetch('/api/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemId),
            });

            if (response.ok) {
                setIsModalOpen(false);
                callParentFunction();
            } else {
                window.alert("Delete failed");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <Button onClick={openModal} buttonSize={buttonSize} buttonType={buttonType}>Delete</Button>

            <Modal title="Delete"
                isModalOpen={isModalOpen}
                onCloseModal={closeModal}
                customClass="container fixed m-auto inset-0 border rounded bg-slate-900 h-fit w-fit px-3 py-2 sm:px-5 sm:py-3">
                <div className="pb-5">
                    <p>Are you sure you want to delete this item?</p>
                </div>
                <div className="flex gap-3 justify-end">
                    <Button buttonType="secondary" onClick={closeModal}>Cancel</Button>
                    <Button onClick={deleteItem}>Yes</Button>
                </div>
            </Modal>
        </>
    )

}