import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import { EventType } from '@events/domain/event-type.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type {
  EventRepository,
  UpdateEventInput
} from '@events/application/ports/event.repository.ts';
import type { ProjectRepository } from '@events/application/ports/project.repository.ts';

export class UpdateEventUseCase {
  constructor(
    private readonly events: EventRepository,
    private readonly projects: ProjectRepository
  ) {}
  async execute(
    id: string,
    input: UpdateEventInput
  ): Promise<Result<Event, AppError>> {
    try {
      const current = await this.events.findById(id);
      if (!current) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }
      const type = input.type ?? current.type;
      const associatedProjectId = input.associatedProjectId ??
        current.associatedProjectId;
      if (type !== EventType.HackathonParticipation && associatedProjectId) {
        return fail(
          createAppError(CommonErrorCode.InvalidInput, eventErrorTypeByCode, {
            message:
              'associatedProjectId is only valid for hackathonParticipation'
          })
        );
      }
      if (
        type === EventType.HackathonParticipation && associatedProjectId &&
        !await this.projects.existsProjectById(associatedProjectId)
      ) {
        return fail(
          createAppError(EventErrorCode.ProjectNotFound, eventErrorTypeByCode, {
            message: 'Associated project not found'
          })
        );
      }
      const updated = await this.events.update(id, input);
      if (!updated) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }
      return ok(updated);
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: '',
          cause
        })
      );
    }
  }
}
