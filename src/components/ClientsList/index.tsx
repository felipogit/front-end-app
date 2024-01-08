import { ClientData } from "@/schemas/clients.schema";
import Card from "../Card";

interface ListClietProps {
    client: ClientData[]
}

const ClientsList = ({ client }: ListClietProps) => {
    
    return (
        <div className="flex flex-col gap-2">

            {client.map((client) => (
                <Card key={client.id} client={client} />
            ))}
        </div>
    )
}

export default ClientsList