# Guia de Deploy Permanente - CRM Imobiliário Premium

Este documento detalha o processo necessário para transicionar o CRM Imobiliário do ambiente de desenvolvimento para uma infraestrutura de produção permanente e escalável. A estratégia de deploy foca em alta disponibilidade, segurança de dados e facilidade de manutenção.

## Estratégia de Hospedagem Recomendada

Para garantir a melhor performance e custo-benefício, recomendamos uma arquitetura distribuída utilizando provedores especializados em cada camada da aplicação. A tabela abaixo resume as plataformas sugeridas e suas respectivas funções no ecossistema do projeto.

| Camada | Plataforma Sugerida | Motivo da Escolha |
| :--- | :--- | :--- |
| **Banco de Dados** | Railway ou Supabase | PostgreSQL gerenciado com backups automáticos e alta performance. |
| **Backend (API)** | Railway ou Render | Suporte nativo a NestJS, escalonamento horizontal e certificados SSL automáticos. |
| **Frontend (Web)** | Vercel ou Netlify | Otimização para React/Vite, CDN global e deploy atômico via GitHub. |

## Processo de Configuração do Ambiente

O primeiro passo para o deploy permanente é a preparação do repositório e das variáveis de ambiente. É imperativo que todas as chaves de segurança e URLs de conexão sejam gerenciadas através de segredos nas plataformas de hospedagem, nunca sendo expostas diretamente no código-fonte.

No **Backend**, você deve configurar a variável `DATABASE_URL` apontando para sua instância de PostgreSQL em produção e definir um `JWT_SECRET` robusto para garantir a integridade das sessões dos usuários. No **Frontend**, a variável `VITE_API_URL` deve conter o endereço público da sua API para permitir a comunicação entre as camadas.

## Fluxo de Deploy Contínuo (CI/CD)

O projeto já inclui configurações para o **GitHub Actions**, localizadas no diretório `.github/workflows`. Este fluxo automatiza os testes e o build da aplicação a cada novo envio de código para a branch principal.

1.  **Integração:** Ao realizar um `push` para o GitHub, os workflows de Backend e Frontend são disparados simultaneamente.
2.  **Validação:** O sistema instala as dependências e executa o processo de build para garantir que não existam erros de compilação.
3.  **Entrega:** Uma vez validado, as plataformas de hospedagem (Vercel/Railway) detectam a alteração e realizam a atualização do site em tempo real, sem interrupção do serviço.

## Manutenção e Domínios

Após a conclusão do deploy técnico, você poderá vincular domínios personalizados (ex: `crm.suaimobiliaria.com.br`) através das configurações de DNS de cada plataforma. Recomendamos o uso do **Cloudflare** como camada adicional de segurança e cache, protegendo seu sistema contra ataques e melhorando a velocidade de carregamento para os corretores.

A manutenção contínua deve focar no monitoramento dos logs de erro e na verificação periódica dos backups do banco de dados, garantindo que os dados dos 190 leads mensais estejam sempre protegidos e acessíveis.
