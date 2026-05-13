import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';

export class GetEventByIdUseCase {
  constructor(private readonly events: EventRepository) {}
  async execute(id: string): Promise<Result<Event, AppError>> {
    try {
      const event = await this.events.findById(id);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }
      return ok(event);
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
