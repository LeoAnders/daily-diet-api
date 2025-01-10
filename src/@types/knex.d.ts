import type { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    users: {
      id: string;
      user: string;
      email: string;
      password_hash: string;
      created_at: Date;
    };
    meals: {
      id: string;
      user_id: string;
      name: string;
      description: string | null;
      datetime: Date;
      is_on_diet: boolean;
      created_at: Date;
    };
  }
}
