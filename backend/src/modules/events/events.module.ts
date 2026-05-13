import { AddEventImageUseCase } from '@events/application/usecases/add-event-image.usecase.ts';
import { AddEventSocialLinkUseCase } from '@events/application/usecases/add-event-social-link.usecase.ts';
import { AddMemberToEventUseCase } from '@events/application/usecases/add-member-to-event.usecase.ts';
import { CreateEventUseCase } from '@events/application/usecases/create-event.usecase.ts';
import { DeleteEventImageUseCase } from '@events/application/usecases/delete-event-image.usecase.ts';
import { DeleteEventSocialLinkUseCase } from '@events/application/usecases/delete-event-social-link.usecase.ts';
import { DeleteEventUseCase } from '@events/application/usecases/delete-event.usecase.ts';
import { GetEventByIdUseCase } from '@events/application/usecases/get-event-by-id.usecase.ts';
import { ListEventImagesUseCase } from '@events/application/usecases/list-event-images.usecase.ts';
import { ListEventMembersUseCase } from '@events/application/usecases/list-event-members.usecase.ts';
import { ListEventSocialLinksUseCase } from '@events/application/usecases/list-event-social-links.usecase.ts';
import { ListEventsUseCase } from '@events/application/usecases/list-events.usecase.ts';
import { RemoveMemberFromEventUseCase } from '@events/application/usecases/remove-member-from-event.usecase.ts';
import { SetHackathonProjectUseCase } from '@events/application/usecases/set-hackathon-project.usecase.ts';
import { SetMainEventImageUseCase } from '@events/application/usecases/set-main-event-image.usecase.ts';
import { UpdateEventImageUseCase } from '@events/application/usecases/update-event-image.usecase.ts';
import { UpdateEventMemberRoleUseCase } from '@events/application/usecases/update-event-member-role.usecase.ts';
import { UpdateEventSocialLinkUseCase } from '@events/application/usecases/update-event-social-link.usecase.ts';
import { UpdateEventUseCase } from '@events/application/usecases/update-event.usecase.ts';
import { EventsController } from '@events/infrastructure/http/events.controller.ts';
import { createEventsRoutes } from '@events/infrastructure/http/events.routes.ts';
import { EventDrizzleRepository } from '@events/infrastructure/persistence/event.drizzle.repository.ts';

export function createEventsModule() {
  const repository = new EventDrizzleRepository();
  const controller = new EventsController(
    new CreateEventUseCase(repository, repository),
    new ListEventsUseCase(repository),
    new GetEventByIdUseCase(repository),
    new UpdateEventUseCase(repository, repository),
    new DeleteEventUseCase(repository),
    new AddMemberToEventUseCase(repository, repository),
    new ListEventMembersUseCase(repository),
    new UpdateEventMemberRoleUseCase(repository),
    new RemoveMemberFromEventUseCase(repository),
    new AddEventImageUseCase(repository),
    new ListEventImagesUseCase(repository),
    new UpdateEventImageUseCase(repository),
    new DeleteEventImageUseCase(repository),
    new SetMainEventImageUseCase(repository),
    new AddEventSocialLinkUseCase(repository),
    new ListEventSocialLinksUseCase(repository),
    new UpdateEventSocialLinkUseCase(repository),
    new DeleteEventSocialLinkUseCase(repository),
    new SetHackathonProjectUseCase(repository, repository)
  );
  return createEventsRoutes(controller);
}
