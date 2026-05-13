import { eq } from 'drizzle-orm';
import { db } from '@shared/infrastructure/db/drizzle.ts';

import type { User } from '@users/domain/user.entity.ts';
import type { UserRepository } from '@users/application/ports/user.repository.ts';
import { usersTable } from '@users/infrastructure/persistence/user.schema.ts';

export class UserDrizzleRepository implements UserRepository {
  async create(input: { name: string; email: string }): Promise<User> {
    const [user] = await db
      .insert(usersTable)
      .values(input)
      .returning();

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    return user ?? null;
  }
}
