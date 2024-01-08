import ClientsList from '@/components/ClientsList'
import { ClientData } from '@/schemas/clients.schema'
import { api } from '@/services/api'
import Image from 'next/image'

const fetchClients = async () => {
  const response = await api.get('/api/v1/clients')
  const clients: ClientData[] = response.data
  return clients
}

export default async function Home() {
 const clients = await fetchClients()

  return (
   <main className='body min-h-screen p-4' >
    <ClientsList client={clients} />
    </main>
  )
}
