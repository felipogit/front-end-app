'use client'
import { useClient } from '@/contexts/clientContext'
import React, { useContext, useEffect, useState } from 'react'

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    const { openModal, setOpenModal } = useClient();

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') setOpenModal(false);

    }

    return (
        <>
            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center" id='wrapper' onClick={handleClose}>
                    <div className=" p-4 rounded w-96">
                        <button
                            className="text-white text-xl font-bold absolute top-2 right-2"
                            onClick={() => setOpenModal(false)}
                        >
                            X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
