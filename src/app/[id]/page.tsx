import Card from "@/components/Card"
import { ClientData } from "@/schemas/clients.schema"
import { api } from "@/services/api"
import Link from "next/link"

interface PageProps {
    params: {
        id: string
    }
}

export const generateStaticParams = async () => {
    const response = await api.get<ClientData[]>(`/api/v1/clients`)

    return response.data.map((client) => ({
        id: client.id.toString()
    }))
}

const Client = async ({ params }: PageProps) => {
    const reponse  = await api.get(`/api/v1/clients/${params.id}`)
    const client = reponse.data

    return (
        <main className="body min-h-screen">
            <div className="flex justify-end p6">
                <Link className="btn-primary" href={"/"}>Voltar</Link>
            </div>
            <div className="flex itens-center justify-center">
                <Card client={client}/>
            </div>
            
        </main>
    )
}

export default Client