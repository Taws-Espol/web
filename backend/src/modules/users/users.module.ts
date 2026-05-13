import { CreateUserUseCase } from '@members/application/usecases/create-user.usecase.ts';
import { GetUserByIdUseCase } from '@members/application/usecases/get-user-by-id.usecase.ts';

import { UserDrizzleRepository } from '@members/infrastructure/persistence/user.repository.ts';

import { UsersController } from '@members/infrastructure/http/users.controller.ts';
import { createUsersRoutes } from '@members/infrastructure/http/users.routes.ts';

export function createUsersModule() {
  const userRepository = new UserDrizzleRepository();

  const createUser = new CreateUserUseCase(userRepository);
  const getUserById = new GetUserByIdUseCase(userRepository);

  const usersController = new UsersController(createUser, getUserById);

  return createUsersRoutes(usersController);
}
