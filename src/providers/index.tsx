'use client'

import { AuthProvider } from "@/contexts/authContext";
import { ClientProvider } from "@/contexts/clientContext";
import { ReactNode } from "react";


export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ClientProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ClientProvider>
        </>
    )
}