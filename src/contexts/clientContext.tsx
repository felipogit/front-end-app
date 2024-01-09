import { ClientData } from "@/schemas/clients.schema";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ClientContextProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  clients: ClientData[]
  setClients: React.Dispatch<React.SetStateAction<ClientData[]>>
}

const ClientContext = createContext<ClientContextProps | undefined>(undefined);

export const ClientProvider: React.FC<Props> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [ clients, setClients ] = useState<ClientData[]>([] as ClientData[])



  return (
    <ClientContext.Provider value={{ openModal, setOpenModal, clients, setClients }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);

  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }

  return context;
};