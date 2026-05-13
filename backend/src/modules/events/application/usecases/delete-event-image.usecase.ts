import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';

export class DeleteEventImageUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    imageId: string
  ): Promise<Result<{ deleted: true }, AppError>> {
    try {
      const deleted = await this.events.deleteImage(eventId, imageId);
      if (!deleted) {
        return fail(
          createAppError(
            EventErrorCode.EventImageNotFound,
            eventErrorTypeByCode,
            { message: 'Event image not found' }
          )
        );
      }

      return ok({ deleted: true });
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to delete event image',
          cause
        })
      );
    }
  }
}
