import { ClientData } from "@/schemas/clients.schema";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import Link from "next/link";

interface CardProps {
    client: ClientData
}

const Card = ({ client }: CardProps) => {

    return (
        
        <div className="flex flex-col items-center gap-4 border-2 p-4">
            <h1> Nome: {client.name}</h1>
            <p> CPF/CNPJ: {client.cpfCnpj}</p>
            <p>Telefone: {client.telephone}</p>
            <p>Email: {client.email}</p>
            <div className="flex justify-between gap-4 ">
                <MdOutlineDelete className="cursor-pointer" />
                <MdModeEdit className="cursor-pointer" />
                <Link href={`${client.id}`}>
                <HiOutlineArrowsExpand className="cursor-pointer" />
                </Link>
            </div>
        </div>
        
    )
}

export default Card