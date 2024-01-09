'use client'

import { useClient } from '@/contexts/clientContext'
import React, { useState } from 'react'

const Button = ({children}: {children: React.ReactNode}) => {
    const { openModal, setOpenModal } = useClient()

    return (
        <button onClick={() => setOpenModal(true)} className="btn-primary">{children}</button>
    )
}

export default Button