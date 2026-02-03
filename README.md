# CRM Imobiliário Premium MVP

Este é um CRM Imobiliário completo desenvolvido com foco em performance, UX premium e simplicidade técnica.

## Stack Tecnológica

- **Backend:** Node.js, NestJS, Prisma ORM, PostgreSQL, JWT Auth.
- **Frontend:** React, TypeScript, Vite, TailwindCSS, Framer Motion, Axios.
- **Infra:** Docker Ready.

## Funcionalidades Principais

- **Autenticação:** Login seguro com JWT e controle de permissões (ADMIN, BROKER).
- **Gestão de Leads:** CRUD completo com IA Heurística para cálculo de score e temperatura.
- **Kanban de Vendas:** Visualização fluida do funil de vendas com animações profissionais.
- **Dashboard:** Métricas em tempo real de VGV, comissões e performance.
- **Gestão de Imóveis e Negócios:** Controle de catálogo e fechamento de vendas.

## Como Executar

### Requisitos
- Docker e Docker Compose instalados.

### Passo a Passo

1. **Clonar o repositório e entrar na pasta:**
   ```bash
   cd crm-imobiliario
   ```

2. **Subir os containers:**
   ```bash
   docker-compose up --build
   ```

3. **Executar as migrações e o seed (em um novo terminal):**
   ```bash
   cd backend
   npx prisma migrate dev --name init
   npm run seed
   ```

4. **Acessar as aplicações:**
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend API:** [http://localhost:3000](http://localhost:3000)

### Credenciais de Acesso (Seed)
- **Admin:** `admin@imobiliaria.com` / `admin123`
- **Corretor:** `corretor1@imobiliaria.com` / `admin123`

## Estrutura do Projeto

```text
crm-imobiliario/
├── backend/          # NestJS API
│   ├── prisma/       # Schema e Migrations
│   └── src/          # Código fonte modular
├── frontend/         # React App
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── pages/      # Páginas da aplicação
│   │   └── lib/        # Configurações (API, etc)
└── docker-compose.yml # Orquestração
```

## IA Heurística (Lead Score)
O sistema utiliza um algoritmo determinístico para pontuar leads baseado em:
- Origem do lead (Direto vs Ads)
- Completude dos dados (E-mail, Telefone)
- Atividade (Simulado no MVP)

---
Desenvolvido com foco em excelência técnica e visual.
