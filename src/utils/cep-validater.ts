import { z } from "zod";

export const zodCepValidator = z
.string()
.trim()
.regex(/^\d{5}-?\d{3}$/, {
  message: 'CEP inválido. Ex: 12345-678 ou 12345678',
})
.transform((cep) => cep.replace(/\D/g, ''))