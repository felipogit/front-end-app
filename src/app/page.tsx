"use client"
import Button from '@/components/Button'
import ClientsList from '@/components/ClientsList'
import CreateClientForm from '@/components/CreateClientForm'
import Modal from '@/components/Modal'
import { useClient } from '@/contexts/clientContext'
import { ClientData } from '@/schemas/clients.schema'
import { api } from '@/services/api'
import { useEffect } from 'react'


export default async function Home() {
  const {clients, setClients} = useClient()

  const fetchClients = async () => {
    const response = await api.get('/api/v1/clients')
    const clients_data: ClientData[] = response.data
    setClients(clients_data)
  }

  useEffect(() => {
    fetchClients()
  },[])

  


  return (
   <main className='body min-h-screen p-4' >
      <Button> Cadastrar </Button>
    <ClientsList client={clients} />
    <Modal>
      <CreateClientForm />
    </Modal>

    </main>
  )
}
