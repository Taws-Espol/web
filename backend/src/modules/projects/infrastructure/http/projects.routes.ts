import { Router } from 'express';
import type { ProjectsController } from '@projects/infrastructure/http/projects.controller.ts';

export function createProjectsRoutes(controller: ProjectsController) {
  const router = Router();
  router.post('/', controller.create);
  router.get('/', controller.list);
  router.get('/:id', controller.getById);
  router.patch('/:id', controller.update);
  router.delete('/:id', controller.delete);
  router.post('/:id/members', controller.addProjectMember);
  router.get('/:id/members', controller.listProjectMembers);
  router.patch('/:id/members/:memberId', controller.updateProjectMemberRole);
  router.delete('/:id/members/:memberId', controller.removeProjectMember);
  return router;
}
