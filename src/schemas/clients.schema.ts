import { z } from "zod";

export const ClientsSchema = z.object({
    id: z.string(),
    name: z.string(),
    cpfCnpj: z.string(),
    telephone: z.string(),
    email: z.string(),
})

export type ClientData = z.infer<typeof ClientsSchema>

export const CreateClientSchema = ClientsSchema.omit({ id: true })

export type CreateClientData = z.infer<typeof CreateClientSchema>