# **📌 Sistema de Gestão de Assinaturas para Operadoras**

📅 **Fase 1 - Desenvolvimento do ServicoGestao**  
📌 **Arquitetura: Clean Architecture (Arquitetura Limpa)**

## **📌 Visão Geral**

Este projeto tem como objetivo **desenvolver um sistema para operadoras de internet**, permitindo **gerenciar clientes, planos e assinaturas**.

Na **Fase 1**, estamos focando na implementação do **ServicoGestao**, utilizando a **Arquitetura Limpa (Clean Architecture)** proposta por Robert C. Martin.

📌 **Escopo da Fase 1:**  
✅ Implementação do **ServicoGestao** para gerenciar clientes, planos e assinaturas.  
✅ Desenvolvimento de **Casos de Uso** seguindo a **Arquitetura Limpa**.  
✅ Implementação de um **banco de dados populado com 10 clientes, 5 planos e 5 assinaturas** (**seeding obrigatório**).  
✅ Exposição de **endpoints REST** para operações de gestão.

⚠️ **O ServicoFaturamento e o ServicoPlanosAtivos serão implementados na Fase 2.**

---

---

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

📌 **4️⃣ Popule o Banco de Dados com os dados obrigatórios (Seeding)**

```sh
npm run seed
```

**(O seeding deve incluir pelo menos 10 clientes, 5 planos e 5 assinaturas.)**

📌 **5️⃣ Inicie a API**

```sh
npm run start
```

---

## **📌 Endpoints Implementados**

| Método  | Endpoint                             | Descrição                                                                  |
| ------- | ------------------------------------ | -------------------------------------------------------------------------- |
| `GET`   | `/gestao/clientes`                   | Lista todos os clientes cadastrados                                        |
| `GET`   | `/gestao/planos`                     | Lista todos os planos cadastrados                                          |
| `POST`  | `/gestao/assinaturas`                | Cria uma nova assinatura (recebe `{codCli, codPlano}`)                     |
| `PATCH` | `/gestao/planos/:idPlano`            | Atualiza o custo mensal de um plano                                        |
| `GET`   | `/gestao/assinaturas/:tipo`          | Retorna assinaturas filtradas por status (`TODOS`, `ATIVOS`, `CANCELADOS`) |
| `GET`   | `/gestao/assinaturascliente/:codcli` | Lista as assinaturas de um cliente específico                              |
| `GET`   | `/gestao/assinaturasplano/:codplano` | Lista assinaturas vinculadas a um plano específico                         |

**📌 Exemplo de resposta para `/gestao/assinaturascliente/123`**

```json
[
  {
    "codigo": 1,
    "codCli": 123,
    "codPlano": 10,
    "inicioFidelidade": "2024-03-01",
    "fimFidelidade": "2025-03-01",
    "status": "ATIVO"
  }
]
```

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

📌 **Seeder para Testes**

- Criado um **script de seeding** para popular o banco com **clientes, planos e assinaturas** automaticamente.

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
