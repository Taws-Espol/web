import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { MemberRepository } from '@events/application/ports/member.repository.ts';
import type { EventMembership } from '@events/domain/event-membership.entity.ts';
import type { EventRole } from '@events/domain/event-role.ts';

export class AddMemberToEventUseCase {
  constructor(
    private readonly events: EventRepository,
    private readonly members: MemberRepository
  ) {}

  async execute(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<Result<EventMembership, AppError>> {
    try {
      const event = await this.events.findById(eventId);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }

      const memberExists = await this.members.existsMemberById(memberId);
      if (!memberExists) {
        return fail(
          createAppError(EventErrorCode.MemberNotFound, eventErrorTypeByCode, {
            message: 'Member not found'
          })
        );
      }

      const alreadyInEvent = await this.events.hasMember(eventId, memberId);
      if (alreadyInEvent) {
        return fail(
          createAppError(
            EventErrorCode.MemberAlreadyInEvent,
            eventErrorTypeByCode,
            { message: 'Member already in event' }
          )
        );
      }

      return ok(await this.events.addMember(eventId, memberId, eventRole));
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to add member to event',
          cause
        })
      );
    }
  }
}
