import type { Event } from '@events/domain/event.entity.ts';
import type { EventImage } from '@events/domain/event-image.entity.ts';
import type { EventMembership } from '@events/domain/event-membership.entity.ts';
import type { EventRole } from '@events/domain/event-role.ts';
import type {
  SocialLink,
  SocialPlatform
} from '@events/domain/social-link.entity.ts';

export type CreateEventInput = Omit<Event, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateEventInput = Partial<CreateEventInput>;

export interface EventRepository {
  create(input: CreateEventInput): Promise<Event>;
  findAll(): Promise<Event[]>;
  findById(id: string): Promise<Event | null>;
  update(id: string, input: UpdateEventInput): Promise<Event | null>;
  delete(id: string): Promise<boolean>;

  addMember(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<EventMembership>;
  hasMember(eventId: string, memberId: string): Promise<boolean>;
  listMembers(eventId: string): Promise<EventMembership[]>;
  updateMemberRole(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<EventMembership | null>;
  removeMember(eventId: string, memberId: string): Promise<boolean>;

  addImage(
    eventId: string,
    imageUrl: string,
    altText: string,
    isMain: boolean
  ): Promise<EventImage>;
  listImages(eventId: string): Promise<EventImage[]>;
  updateImage(
    eventId: string,
    imageId: string,
    input: { imageUrl?: string; altText?: string; isMain?: boolean }
  ): Promise<EventImage | null>;
  deleteImage(eventId: string, imageId: string): Promise<boolean>;
  hasMainImage(eventId: string): Promise<boolean>;
  setMainImage(eventId: string, imageId: string): Promise<EventImage | null>;

  addSocialLink(
    eventId: string,
    platform: SocialPlatform,
    url: string,
    label: string | null
  ): Promise<SocialLink>;
  listSocialLinks(eventId: string): Promise<SocialLink[]>;
  updateSocialLink(
    eventId: string,
    linkId: string,
    input: { platform?: SocialPlatform; url?: string; label?: string | null }
  ): Promise<SocialLink | null>;
  deleteSocialLink(eventId: string, linkId: string): Promise<boolean>;
}
