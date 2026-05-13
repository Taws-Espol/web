import { Router } from 'express';
import type { MembersController } from '@members/infrastructure/http/members.controller.ts';

export function createMembersRoutes(controller: MembersController) {
  const router = Router();
  router.post('/', controller.create);
  router.get('/', controller.list);
  router.get('/:id', controller.getById);
  router.patch('/:id', controller.update);
  router.delete('/:id', controller.delete);
  return router;
}
