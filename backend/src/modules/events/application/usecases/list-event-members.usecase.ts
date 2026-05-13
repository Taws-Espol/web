import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { EventMembership } from '@events/domain/event-membership.entity.ts';

export class ListEventMembersUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(eventId: string): Promise<Result<EventMembership[], AppError>> {
    try {
      const event = await this.events.findById(eventId);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }

      return ok(await this.events.listMembers(eventId));
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to list event members',
          cause
        })
      );
    }
  }
}
