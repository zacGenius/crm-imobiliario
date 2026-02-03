# Guia de Deploy no Vercel - CRM Imobiliário

O Vercel é a plataforma recomendada para hospedar o frontend deste CRM devido à sua otimização nativa para React e Vite.

## Passo 1: Preparação do Código
Certifique-se de que o seu código está em um repositório no GitHub, GitLab ou Bitbucket. O Vercel se conecta diretamente a esses provedores para realizar o deploy automático.

## Passo 2: Importação do Projeto
1. Acesse o [Dashboard do Vercel](https://vercel.com/dashboard).
2. Clique em **"Add New..."** e selecione **"Project"**.
3. Importe o repositório onde você subiu o código do CRM.

## Passo 3: Configurações de Build
Na tela de importação, o Vercel deve detectar automaticamente o Vite. Caso contrário, use as seguintes configurações:
- **Framework Preset:** `Vite`
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Passo 4: Variáveis de Ambiente
Este passo é crucial para que o frontend consiga conversar com o seu backend permanente:
1. Expanda a seção **"Environment Variables"**.
2. Adicione a chave: `VITE_API_URL`.
3. No valor, coloque a URL da sua API (ex: `https://seu-backend.railway.app`).

## Passo 5: Deploy
Clique em **"Deploy"**. O Vercel irá compilar seu projeto e fornecer uma URL permanente (ex: `crm-imobiliario.vercel.app`).

---

### Dicas de Ouro:
- **SPA Routing:** O arquivo `vercel.json` já está configurado para garantir que as rotas do React (como `/leads` ou `/dashboard`) funcionem corretamente após o refresh da página.
- **Domínio Próprio:** Você pode adicionar seu domínio (ex: `app.suaimobiliaria.com.br`) na aba **"Settings" > "Domains"** do projeto no Vercel.
