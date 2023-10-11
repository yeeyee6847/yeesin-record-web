'use client'
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({ title, isModalOpen, onCloseModal, children, customClass }) {

    return (
        <Transition show={isModalOpen} as={Fragment}>
            <Dialog onClose={onCloseModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black/30' />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    <Dialog.Panel className={`${customClass ? customClass : 'container fixed m-auto inset-0 border rounded bg-slate-900 h-2/4 px-3 py-2 sm:px-5 sm:py-3'}`}>
                        <div className='flex justify-between mb-3 sm:mb-5 pb-2 items-center border-b'>
                            <Dialog.Title className='text-xl sm:text-2xl'>{title}</Dialog.Title>
                            <XMarkIcon onClick={onCloseModal} id='closeModal'
                                className='w-4 h-4 sm:w-5 sm:h-5 hover:text-slate-700 cursor-pointer'/>
                        </div>
                        {children}
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}