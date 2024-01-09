'use client'

import { clientAuth } from "@/contexts/authContext"
import { useClient } from "@/contexts/clientContext"
import { CreateClientData, CreateClientSchema } from "@/schemas/clients.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const CreateClientForm = () => {
    const { register, handleSubmit } = useForm<CreateClientData>({
        resolver: zodResolver(CreateClientSchema)
    })

    const { register: clientRegister } = clientAuth()
    const { openModal, setOpenModal } = useClient();
    const router = useRouter()

    const onSubmit = (data: CreateClientData) => {
        console.log(data)
        clientRegister(data)
        
    }

    return (
        <form  className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input type="text" placeholder="Nome" {...register('name')} />
            <label >CPF/CNPJ</label>
            <input type="text" placeholder="CPF/CNPJ" {...register('cpfCnpj')} />
            <label >Telefone</label>
            <input type="text" placeholder="Telefone" {...register('telephone')} />
            <label >Email</label>
            <input type="email" placeholder="Email" {...register('email')} />
            <button type="submit" >Cadastrar</button>

        </form>
    )
}

export default CreateClientForm