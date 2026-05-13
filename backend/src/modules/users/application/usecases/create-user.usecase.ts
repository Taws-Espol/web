import type { UserRepository } from '@users/application/ports/user.repository.ts';

export class CreateUserUseCase {
  constructor(private readonly users: UserRepository) {}

  async execute(input: { name: string; email: string }) {
    return await this.users.create(input);
  }
}
