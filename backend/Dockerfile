FROM node:22-slim

# Instalar OpenSSL e outras dependências necessárias para o Prisma
RUN apt-get update -y && apt-get install -y openssl libssl-dev ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN npx prisma generate

EXPOSE 3000

# Usar start:prod para produção
CMD ["pnpm", "run", "start:prod"]
