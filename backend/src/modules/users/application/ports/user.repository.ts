import type { User } from '@users/domain/user.entity.ts';

export interface UserRepository {
  create(input: { name: string; email: string }): Promise<User>;
  findById(id: string): Promise<User | null>;
}
