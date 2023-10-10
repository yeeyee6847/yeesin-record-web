'use client'
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { Fragment, useState } from "react";

export default function TableCellUpdateButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <button onClick={openModal}
                className="border rounded px-2 py-1 bg-blue-700 hover:bg-blue-500">
                Update
            </button>

            {isModalOpen ?
                <Modal title="Update" isModalOpen={isModalOpen} onCloseModal={closeModal}>
                    <div>
                        <Input labelName="Value" isRequired={true}></Input>

                    </div>
                </Modal>
                : ""
            }

        </>
    )
}