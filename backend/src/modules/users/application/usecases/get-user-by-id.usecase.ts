import type { UserRepository } from '@users/application/ports/user.repository.ts';

export class GetUserByIdUseCase {
  constructor(private readonly users: UserRepository) {}

  async execute(id: string) {
    return await this.users.findById(id);
  }
}
