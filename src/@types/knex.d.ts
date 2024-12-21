import type { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    users: {
      id: string; // UUID
      user: string; // Nome do usuário
      email: string; // Email do usuário
      password_hash: string; // Hash da senha
      created_at: Date; // Data e hora de criação
    };
    meals: {
      id: string; // UUID
      user_id: string; // Referência ao ID do usuário
      name: string; // Nome da refeição
      description: string | null; // Descrição da refeição (pode ser nula)
      datetime: Date; // Data e hora da refeição
      is_on_diet: boolean; // Indicador de dieta
      created_at: Date; // Data e hora de criação
    };
  }
}
