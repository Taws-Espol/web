import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';

export class ListEventsUseCase {
  constructor(private readonly events: EventRepository) {}
  async execute(): Promise<Result<Event[], AppError>> {
    try {
      return ok(await this.events.findAll());
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
