'use client'
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { useState } from "react";

export default function CreateButton({ afterModalAction }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        value: ''
    })

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const saveData = async () => {
        try {
            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsModalOpen(false);
                afterModalAction();
                setFormData({ value: '' });
            } else {
                window.alert("save data failed!!");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <Button onClick={openModal}>
                Create
            </Button>

            <Modal title="Create" isModalOpen={isModalOpen} onCloseModal={closeModal}>
                <Input labelName='Value' isRequired={true} value={formData.value} onChange={(e) => setFormData({ value: e.target.value })} />
                <div className='pt-5'>
                    <Button onClick={saveData}>Save</Button>
                </div>
            </Modal>
        </div>
    )
}