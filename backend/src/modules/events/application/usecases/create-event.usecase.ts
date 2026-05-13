import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import { EventType } from '@events/domain/event-type.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type {
  CreateEventInput,
  EventRepository
} from '@events/application/ports/event.repository.ts';
import type { ProjectRepository } from '@events/application/ports/project.repository.ts';

export class CreateEventUseCase {
  constructor(
    private readonly events: EventRepository,
    private readonly projects: ProjectRepository
  ) {}
  async execute(input: CreateEventInput): Promise<Result<Event, AppError>> {
    try {
      if (
        input.type !== EventType.HackathonParticipation &&
        input.associatedProjectId
      ) {
        return fail(
          createAppError(CommonErrorCode.InvalidInput, eventErrorTypeByCode, {
            message:
              'associatedProjectId is only valid for hackathonParticipation'
          })
        );
      }
      if (
        input.type === EventType.HackathonParticipation &&
        input.associatedProjectId &&
        !await this.projects.existsProjectById(input.associatedProjectId)
      ) {
        return fail(
          createAppError(EventErrorCode.ProjectNotFound, eventErrorTypeByCode, {
            message: 'Associated project not found'
          })
        );
      }
      return ok(await this.events.create(input));
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
