import { z } from 'zod';
import { EventRole } from '@events/domain/event-role.ts';
import { EventType } from '@events/domain/event-type.ts';
import { SocialPlatform } from '@events/domain/social-link.entity.ts';

export const eventIdParamsSchema = z.object({ id: z.string().uuid() });
export const eventMemberParamsSchema = z.object({
  id: z.string().uuid(),
  memberId: z.string().uuid()
});
export const eventImageParamsSchema = z.object({
  id: z.string().uuid(),
  imageId: z.string().uuid()
});
export const eventLinkParamsSchema = z.object({
  id: z.string().uuid(),
  linkId: z.string().uuid()
});

export const createEventBodySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  type: z.nativeEnum(EventType),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime(),
  location: z.string().min(1),
  associatedProjectId: z.string().uuid().nullable()
});
export const updateEventBodySchema = createEventBodySchema.partial();

export const addEventMemberBodySchema = z.object({
  memberId: z.string().uuid(),
  eventRole: z.nativeEnum(EventRole)
});
export const updateEventMemberRoleBodySchema = z.object({
  eventRole: z.nativeEnum(EventRole)
});

export const addEventImageBodySchema = z.object({
  imageUrl: z.string().url(),
  altText: z.string().min(1),
  isMain: z.boolean()
});
export const updateEventImageBodySchema = z.object({
  imageUrl: z.string().url().optional(),
  altText: z.string().min(1).optional(),
  isMain: z.boolean().optional()
});

export const addEventSocialLinkBodySchema = z.object({
  platform: z.nativeEnum(SocialPlatform),
  url: z.string().url(),
  label: z.string().min(1).nullable()
});
export const updateEventSocialLinkBodySchema = z.object({
  platform: z.nativeEnum(SocialPlatform).optional(),
  url: z.string().url().optional(),
  label: z.string().min(1).nullable().optional()
});

export const setHackathonProjectBodySchema = z.object({
  associatedProjectId: z.string().uuid().nullable()
});
