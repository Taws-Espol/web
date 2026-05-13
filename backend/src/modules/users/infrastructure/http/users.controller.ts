import type { Request, Response } from 'express';

import type { CreateUserUseCase } from '@users/application/usecases/create-user.usecase.ts';
import type { GetUserByIdUseCase } from '@users/application/usecases/get-user-by-id.usecase.ts';

export class UsersController {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly getUserById: GetUserByIdUseCase
  ) {}

  create = async (req: Request, res: Response) => {
    const user = await this.createUser.execute({
      name: req.body.name,
      email: req.body.email
    });

    res.status(201).json(user);
  };

  getById = async (req: Request, res: Response) => {
    const user = await this.getUserById.execute(req.params.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
  };
}
