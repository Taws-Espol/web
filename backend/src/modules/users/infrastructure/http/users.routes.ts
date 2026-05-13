import { Router } from 'express';
import type { UsersController } from '@users/infrastructure/http/users.controller.ts';

export function createUsersRoutes(controller: UsersController) {
  const router = Router();

  router.post('/', controller.create);
  router.get('/:id', controller.getById);

  return router;
}
