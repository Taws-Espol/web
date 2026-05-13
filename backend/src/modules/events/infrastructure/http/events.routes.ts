import { Router } from 'express';
import type { EventsController } from '@events/infrastructure/http/events.controller.ts';

export function createEventsRoutes(controller: EventsController) {
  const router = Router();
  router.post('/', controller.create);
  router.get('/', controller.list);
  router.get('/:id', controller.getById);
  router.patch('/:id', controller.update);
  router.delete('/:id', controller.delete);

  router.post('/:id/members', controller.addEventMember);
  router.get('/:id/members', controller.listEventMembers);
  router.patch('/:id/members/:memberId', controller.updateEventMemberRole);
  router.delete('/:id/members/:memberId', controller.removeEventMember);

  router.post('/:id/images', controller.addEventImage);
  router.get('/:id/images', controller.listEventImages);
  router.patch('/:id/images/:imageId', controller.updateEventImage);
  router.delete('/:id/images/:imageId', controller.deleteEventImage);
  router.patch('/:id/images/:imageId/main', controller.setMainEventImage);

  router.post('/:id/social-links', controller.addEventSocialLink);
  router.get('/:id/social-links', controller.listEventSocialLinks);
  router.patch('/:id/social-links/:linkId', controller.updateEventSocialLink);
  router.delete('/:id/social-links/:linkId', controller.deleteEventSocialLink);

  router.patch(
    '/:id/hackathon-project',
    controller.setHackathonProjectForEvent
  );
  return router;
}
