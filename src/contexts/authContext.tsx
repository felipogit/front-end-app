import { ClientData, CreateClientData } from "@/schemas/clients.schema";
import { api } from "@/services/api";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useClient } from "./clientContext";

interface Props {
    children: ReactNode
}

interface AuthProviderData {
    register:(createClientData: CreateClientData) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: Props) => {
    
    const { openModal, setOpenModal, setClients } = useClient();
    const [ fetch, setFetch ] = useState(false)

    const handleFetch = () => setFetch(!fetch)
    const fetchClients = async () => {
        const response = await api.get('/api/v1/clients')
        const clients_data: ClientData[] = response.data
        setClients(clients_data)
      }

    useEffect(() => {
        fetchClients()
    },[fetch])

    const register = (createClientData: CreateClientData) => {
        api.post('/api/v1/clients', createClientData)
        .then((response) => {
            setOpenModal(false),
            handleFetch()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <AuthContext.Provider value={{ register } }>
            {children}
        </AuthContext.Provider>
    )
}

export const clientAuth = () => useContext(AuthContext)