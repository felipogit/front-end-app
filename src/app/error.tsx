"use client"

import { useEffect } from "react"

interface ErrorProps {
    error: Error,
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className=" body flex justify-center items-center flex-col w-full h-screen">
            <h1>Sua pagina deu erro</h1>
            <button type="button" onClick={reset}>Tente novamente </button>
        </div>
    )
}