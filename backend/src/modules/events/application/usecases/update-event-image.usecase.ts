import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type { EventImage } from '@events/domain/event-image.entity.ts';

export class UpdateEventImageUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    imageId: string,
    input: { imageUrl?: string; altText?: string; isMain?: boolean }
  ): Promise<Result<EventImage, AppError>> {
    try {
      if (input.isMain === true && (await this.events.hasMainImage(eventId))) {
        return fail(
          createAppError(
            EventErrorCode.EventMainImageAlreadyExists,
            eventErrorTypeByCode,
            { message: 'Event already has a main image' }
          )
        );
      }

      const image = await this.events.updateImage(eventId, imageId, input);
      if (!image) {
        return fail(
          createAppError(
            EventErrorCode.EventImageNotFound,
            eventErrorTypeByCode,
            { message: 'Event image not found' }
          )
        );
      }

      return ok(image);
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to update event image',
          cause
        })
      );
    }
  }
}
