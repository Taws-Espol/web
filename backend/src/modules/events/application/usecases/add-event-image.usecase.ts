import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { EventImage } from '@events/domain/event-image.entity.ts';

export class AddEventImageUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    imageUrl: string,
    altText: string,
    isMain: boolean
  ): Promise<Result<EventImage, AppError>> {
    try {
      const event = await this.events.findById(eventId);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }

      if (isMain && (await this.events.hasMainImage(eventId))) {
        return fail(
          createAppError(
            EventErrorCode.EventMainImageAlreadyExists,
            eventErrorTypeByCode,
            { message: 'Event already has a main image' }
          )
        );
      }

      return ok(await this.events.addImage(eventId, imageUrl, altText, isMain));
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to add event image',
          cause
        })
      );
    }
  }
}
