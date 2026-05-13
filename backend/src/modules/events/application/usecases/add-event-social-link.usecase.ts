import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { eventErrorTypeByCode } from '@events/application/errors/event-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { EventErrorCode } from '@events/application/errors/event-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { EventRepository } from '@events/application/ports/event.repository.ts';
import type {
  SocialLink,
  SocialPlatform
} from '@events/domain/social-link.entity.ts';

export class AddEventSocialLinkUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    platform: SocialPlatform,
    url: string,
    label: string | null
  ): Promise<Result<SocialLink, AppError>> {
    try {
      const event = await this.events.findById(eventId);
      if (!event) {
        return fail(
          createAppError(EventErrorCode.EventNotFound, eventErrorTypeByCode, {
            message: 'Event not found'
          })
        );
      }

      return ok(await this.events.addSocialLink(eventId, platform, url, label));
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to add event social link',
          cause
        })
      );
    }
  }
}
