import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function ButtonWithModal({ buttonTitle, buttonSize, buttonType, buttonCustomClass, modalTitle, modalCustomClass, closeModal, children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const internalCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Button onClick={openModal}
                buttonSize={buttonSize}
                buttonType={buttonType}
                buttonCustomClass={buttonCustomClass}>
                {buttonTitle}
            </Button>

            <Modal isModalOpen={isModalOpen} onCloseModal={internalCloseModal} 
                title={modalTitle}
                customClass={modalCustomClass}>
                {children}
            </Modal>
        </>
    )
}