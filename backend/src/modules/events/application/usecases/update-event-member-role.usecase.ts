import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { EventMembership } from '@events/domain/event-membership.entity.ts';
import type { EventRole } from '@events/domain/event-role.ts';

export class UpdateEventMemberRoleUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<Result<EventMembership, AppError>> {
    try {
      const membership = await this.events.updateMemberRole(
        eventId,
        memberId,
        eventRole
      );
      if (!membership) {
        return fail(
          createAppError(
            EventErrorCode.EventMembershipNotFound,
            eventErrorTypeByCode,
            { message: 'Event membership not found' }
          )
        );
      }

      return ok(membership);
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to update event membership',
          cause
        })
      );
    }
  }
}
