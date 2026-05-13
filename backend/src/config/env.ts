export const DATABASE_URL = `postgres://${Deno.env.get('POSTGRES_USER')}:` +
  `${Deno.env.get('POSTGRES_PASSWORD')}@` +
  `${Deno.env.get('POSTGRES_HOST')}:` +
  `${Deno.env.get('POSTGRES_PORT')}/` +
  `${Deno.env.get('POSTGRES_DB')}`;
