# Etapa 1: Build (compilar TypeScript e gerar Prisma Client)
FROM node:22-alpine AS builder

WORKDIR /app

# Copia os arquivos do projeto
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
COPY tsconfig.json ./
COPY src ./src

# Instala as dependências usando pnpm
RUN corepack enable && pnpm install --frozen-lockfile

# Gera o Prisma Client
RUN npx prisma generate

# Compila o projeto TypeScript
RUN pnpm run build

# Etapa 2: Imagem final para produção
FROM node:lts-slim

WORKDIR /app

# Só copia o que precisa: dependências de produção + dist + prisma client
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile --prod


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY prisma ./prisma 

# Define variável de ambiente (exemplo de envs)
ENV NODE_ENV=production

# Porta que seu app escuta (ajuste se for diferente)
EXPOSE 3000

# Comando para iniciar
CMD ["node", "dist/server.js"]