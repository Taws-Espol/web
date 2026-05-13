import { z } from 'zod';
import { EventRole } from '@events/domain/event-role.ts';
import { EventType } from '@events/domain/event-type.ts';
import { SocialPlatform } from '@events/domain/social-link.entity.ts';

export const eventResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  type: z.nativeEnum(EventType),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
  associatedProjectId: z.string().uuid().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const eventMembershipResponseSchema = z.object({
  id: z.string().uuid(),
  eventId: z.string().uuid(),
  memberId: z.string().uuid(),
  eventRole: z.nativeEnum(EventRole),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const eventImageResponseSchema = z.object({
  id: z.string().uuid(),
  eventId: z.string().uuid(),
  imageUrl: z.string().url(),
  altText: z.string(),
  isMain: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const eventSocialLinkResponseSchema = z.object({
  id: z.string().uuid(),
  eventId: z.string().uuid(),
  platform: z.nativeEnum(SocialPlatform),
  url: z.string().url(),
  label: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const eventDeletedResponseSchema = z.object({
  deleted: z.literal(true)
});
