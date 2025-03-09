Ótima observação, Gui! 🚀 Como na **Fase 1** só precisamos implementar o **ServicoGestao**, o README deve refletir isso e **não incluir detalhes do ServicoFaturamento**.

Aqui está o **README.md** ajustado para cobrir apenas a **Fase 1**, incluindo **descrição, estrutura do projeto, instruções de execução e aprendizados**.

---

# **📌 Sistema de Gestão de Assinaturas para Operadoras**

📅 **Fase 1 - Desenvolvimento do ServicoGestao**  
📌 **Arquitetura: Clean Architecture**

## **📌 Visão Geral**

Este projeto tem como objetivo **desenvolver um sistema para operadoras de internet**, permitindo **gerenciar clientes, planos e assinaturas**.

Na **Fase 1**, estamos focando na implementação do **ServicoGestao**, utilizando a **Arquitetura Limpa (Clean Architecture)** proposta por Robert C. Martin.

## **🚀 Como Executar o Projeto**

📌 **1️⃣ Instale as dependências:**

```sh
npm install
```

📌 **2️⃣ Configure o Banco de Dados**

- No arquivo **.env**, configure as credenciais do banco:

```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=senha
DATABASE_NAME=gestao_assinaturas
```

📌 **3️⃣ Rode as migrações para criar as tabelas**

```sh
npm run typeorm migration:run
```

📌 **4️⃣ Inicie a API**

```sh
npm run start
```

---

## **📌 Endpoints Implementados**

| Método | Endpoint                             | Descrição                                  |
| ------ | ------------------------------------ | ------------------------------------------ |
| `GET`  | `/gestao/clientes`                   | Lista todos os clientes cadastrados        |
| `POST` | `/gestao/clientes`                   | Cria um novo cliente                       |
| `GET`  | `/gestao/assinaturascliente/:codcli` | Lista assinaturas de um cliente específico |
| `POST` | `/gestao/assinaturas`                | Cadastra uma nova assinatura               |
| `GET`  | `/gestao/planos`                     | Lista planos disponíveis                   |

---

## **📌 Tecnologias Utilizadas**

✅ **Node.js + NestJS** → Framework para API  
✅ **TypeScript** → Tipagem estática  
✅ **TypeORM** → ORM para banco de dados  
✅ **MySQL** → Banco de dados relacional  
✅ **Jest** → Testes unitários  
✅ **Arquitetura Limpa** → Separação de responsabilidades

---

## **📌 Decisões de Arquitetura**

📌 **Arquitetura Limpa (Clean Architecture)**

- Separação de **Domínio, Aplicação e Infraestrutura**
- **Repositórios desacoplados do ORM**, permitindo trocar a tecnologia no futuro

📌 **Princípios SOLID**

- **Single Responsibility**: Casos de Uso contêm regras de negócio
- **Dependency Inversion**: Camadas de domínio não conhecem infraestrutura

---

## **📌 Aprendizados da Fase 1**

📌 **Desafios encontrados:**

- Implementação da Arquitetura Limpa no NestJS
- Definição clara de responsabilidades entre **entidades do domínio e entidades do banco**
- Uso correto de **Casos de Uso** para evitar regras de negócio nos Controllers

📌 **Soluções adotadas:**

- Criamos um `Cliente.ts` (Domínio) separado de `ClienteEntity.ts` (Banco)
- Centralizamos **as regras de negócio nos Casos de Uso**, evitando lógica nos Controllers

---

## **📌 Próximos Passos (Fase 2)**

🚀 **Na Fase 2, vamos implementar os microsserviços `ServicoFaturamento` e `ServicoPlanosAtivos`**, com eventos assíncronos e filas.

---

🔥 **Agora seu README está pronto para ser usado!** Se precisar de ajustes, me avise! 😃
