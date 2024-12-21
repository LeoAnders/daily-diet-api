A **Daily Diet API** é um sistema para gerenciamento de refeições diárias, projetado para ajudar os usuários a controlarem suas dietas, registrando informações sobre suas refeições e métricas de acompanhamento. A API permite o gerenciamento de usuários, o registro de refeições, e o cálculo de métricas relacionadas à dieta de cada usuário.

## Especificações

### RFs (Requisitos Funcionais)  
- [ ] Deve ser possível criar um usuário.  
- [ ] Deve ser possível identificar o usuário entre as requisições.  
- [ ] Deve ser possível registrar uma refeição feita, contendo:  
   - Nome.  
   - Descrição.  
   - Data e hora.  
   - Indicação se está dentro ou fora da dieta.  
- [ ] Deve ser possível editar uma refeição, podendo alterar todos os seus dados.  
- [ ] Deve ser possível apagar uma refeição.  
- [ ] Deve ser possível listar todas as refeições de um usuário.  
- [ ] Deve ser possível visualizar uma única refeição.  
- [ ] Deve ser possível recuperar as métricas de um usuário, incluindo:  
   - Quantidade total de refeições registradas.  
   - Quantidade de refeições dentro da dieta.  
   - Quantidade de refeições fora da dieta.  
   - Melhor sequência de refeições dentro da dieta.  

---

### RNs (Regras de Negócio)  
- [ ] O usuário só pode visualizar, editar e apagar as refeições que ele próprio criou.  
- [ ] O campo `email` deve ser único para cada usuário.  
- [ ] A senha do usuário deve ser armazenada de forma segura, utilizando hash.  
- [ ] Refeições devem estar associadas a um único usuário.  
- [ ] A melhor sequência de refeições dentro da dieta deve ser calculada de forma cronológica.  

---

### RNFs (Requisitos Não-Funcionais)  
- [ ] A aplicação deve utilizar um banco de dados relacional para armazenar os dados (SQLite). 
- [ ] Senhas devem ser criptografadas utilizando uma biblioteca confiável.  
- [ ] O sistema deve utilizar UUID para os identificadores únicos de usuários e refeições.  
- [ ] A API deve seguir os padrões REST.  
- [ ] Deve haver autenticação nas rotas que necessitam de identificação do usuário.  
- [ ] As respostas da API devem seguir um padrão JSON.

---

## Tabelas

### **Tabela 1: Usuários (users)**

| **Coluna**      | **Tipo**    | **Descrição**                           |
|-----------------|-------------|-----------------------------------------|
| **id**          | UUID (PK)   | Identificador único de cada usuário     |
| user            | VARCHAR     | Nome do usuário                         |
| email           | VARCHAR(UNIQUE) | Email do usuário                    |
| password_hash   | VARCHAR     | Senha do usuário (armazenada de forma segura) |
| created_at      | TIMESTAMP   | Data e hora de criação do usuário       |

### **Tabela 2: Refeições (meals)**

| **Coluna**      | **Tipo**    | **Descrição**                           |
|-----------------|-------------|-----------------------------------------|
| **id**          | UUID (PK)   | Identificador único da refeição         |
| **user_id**     | UUID (FK)   | Referência ao id do usuário (chave estrangeira) |
| name            | VARCHAR     | Nome da refeição                        |
| description     | TEXT        | Descrição da refeição                   |
| datetime        | TIMESTAMP   | Data e hora da refeição                 |
| is_on_diet      | BOOLEAN     | Indica se a refeição está dentro da dieta |
| created_at      | TIMESTAMP   | Data e hora de criação do registro      |

---

## Rotas da API

### **Rotas de Usuário:**

- `POST - /user`:  
  Cria um novo usuário.  
  **Campos obrigatórios**: `user`, `email`, `password`.

- `GET - /user/:id`:  
  Retorna as informações de um usuário com base no `id`.  
  **Validação**: Verifique se o `id` é válido (formato UUID) e se o usuário existe.

---

### **Rotas de Refeições:**

- `POST - /meals`:  
  Cria uma refeição associada a um usuário autenticado.  
  **Campos obrigatórios**: `name`, `description`, `datetime`, `is_on_diet`.

- `GET - /meals`:  
  Lista todas as refeições do usuário autenticado.

- `GET - /meals/:id`:  
  Retorna os detalhes de uma única refeição do usuário autenticado.

- `PUT - /meals/:id`:  
  Edita os dados de uma refeição do usuário autenticado.

- `DELETE - /meals/:id`:  
  Apaga uma refeição do usuário autenticado.

---

### **Rotas de Métricas:**

- `GET - /metrics`:  
  Recupera as métricas de um usuário autenticado.  
  **Métricas**:
  - Total de refeições registradas.
  - Refeições dentro da dieta.
  - Refeições fora da dieta.
  - Melhor sequência de refeições dentro da dieta.
