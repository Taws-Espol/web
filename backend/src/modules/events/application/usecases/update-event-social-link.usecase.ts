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

export class UpdateEventSocialLinkUseCase {
  constructor(private readonly events: EventRepository) {}

  async execute(
    eventId: string,
    linkId: string,
    input: { platform?: SocialPlatform; url?: string; label?: string | null }
  ): Promise<Result<SocialLink, AppError>> {
    try {
      const link = await this.events.updateSocialLink(eventId, linkId, input);
      if (!link) {
        return fail(
          createAppError(
            EventErrorCode.EventSocialLinkNotFound,
            eventErrorTypeByCode,
            { message: 'Event social link not found' }
          )
        );
      }

      return ok(link);
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, eventErrorTypeByCode, {
          message: 'Failed to update event social link',
          cause
        })
      );
    }
  }
}
