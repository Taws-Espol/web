import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import { EventType } from '@events/domain/event-type.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { ProjectRepository } from '@events/application/ports/project.repository.ts';

export class SetHackathonProjectUseCase {
  constructor(
    private readonly events: EventRepository,
    private readonly projects: ProjectRepository
  ) {}

  async execute(
    eventId: string,
    associatedProjectId: string | null
  ): Promise<Result<Event, AppError>> {
    try {
      const event = await this.events.findById(eventId);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }

      if (event.type !== EventType.HackathonParticipation) {
        return fail(
          createAppError(CommonErrorCode.InvalidInput, eventErrorTypeByCode, {
            message:
              'Only hackathonParticipation events can have associatedProjectId'
          })
        );
      }

      if (
        associatedProjectId &&
        !(await this.projects.existsProjectById(associatedProjectId))
      ) {
        return fail(
          createAppError(EventErrorCode.ProjectNotFound, eventErrorTypeByCode, {
            message: 'Associated project not found'
          })
        );
      }

      const updated = await this.events.update(eventId, {
        associatedProjectId
      });
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
          message: 'Failed to set hackathon project for event',
          cause
        })
      );
    }
  }
}
