import { z } from "zod";
import { zodCNPJ } from "../utils/cnpj-validator";
import { zodCepValidator } from "../utils/cep-validater";

const cellphoneRegex = /^(\(?\d{2}\)?\s?)?(9\d{4})-?(\d{4})$/
const businessPhoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4})-?(\d{4})$/

export const createCustomerSchema = z.object({
  name: z.string().min(1, {message: "O campo Nome é obrigatório"}),
  document: zodCNPJ(),
  contactPerson: z.string().optional(),
  email: z.string().email({message: "Insira um email válido"}).optional(),
  cellphone: z.string().regex(cellphoneRegex, { message: "Número de celular inválido. Ex: (11) 91234-5678"  }).optional(),
  businessPhone: z.string().regex(businessPhoneRegex, { message: 'Número de telefone comercial inválido. Ex: (11) 1234-5678' }).optional(),
  address: z.object({
    streetAddress: z.string().optional(),
    zipCode: zodCepValidator,
    city: z.string().optional(),
    state: z.string().optional(),
    neighborhood: z.string().optional(),
    number: z.string().optional(),
  }),
  stateRegistration: z.string()
})

export type CreateCustomerSchema = z.infer<typeof createCustomerSchema>