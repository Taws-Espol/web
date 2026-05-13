import { and, eq } from 'drizzle-orm';
import { db } from '@shared/infrastructure/db/drizzle.ts';
import type {
  CreateEventInput,
  EventRepository,
  UpdateEventInput
} from '@events/application/ports/event.repository.ts';
import type { MemberRepository } from '@events/application/ports/member.repository.ts';
import type { ProjectRepository } from '@events/application/ports/project.repository.ts';
import type { Event } from '@events/domain/event.entity.ts';
import type { EventImage } from '@events/domain/event-image.entity.ts';
import type { EventMembership } from '@events/domain/event-membership.entity.ts';
import type { EventRole } from '@events/domain/event-role.ts';
import type {
  SocialLink,
  SocialPlatform
} from '@events/domain/social-link.entity.ts';
import { membersTable } from '@members/infrastructure/persistence/member.schema.ts';
import { projectsTable } from '@projects/infrastructure/persistence/project.schema.ts';
import {
  eventImagesTable,
  eventMembershipsTable,
  eventSocialLinksTable,
  eventsTable
} from '@events/infrastructure/persistence/event.schema.ts';

export class EventDrizzleRepository
  implements EventRepository, MemberRepository, ProjectRepository {
  async create(input: CreateEventInput): Promise<Event> {
    const [row] = await db.insert(eventsTable).values(input).returning();
    return row as Event;
  }
  async findAll(): Promise<Event[]> {
    return await db.select().from(eventsTable) as Event[];
  }
  async findById(id: string): Promise<Event | null> {
    const [row] = await db.select().from(eventsTable).where(
      eq(eventsTable.id, id)
    );
    return (row as Event | undefined) ?? null;
  }
  async update(id: string, input: UpdateEventInput): Promise<Event | null> {
    const [row] = await db.update(eventsTable).set({
      ...input,
      updatedAt: new Date()
    }).where(eq(eventsTable.id, id)).returning();
    return (row as Event | undefined) ?? null;
  }
  async delete(id: string): Promise<boolean> {
    const rows = await db.delete(eventsTable).where(eq(eventsTable.id, id))
      .returning({ id: eventsTable.id });
    return rows.length > 0;
  }

  async addMember(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<EventMembership> {
    const [row] = await db.insert(eventMembershipsTable).values({
      eventId,
      memberId,
      eventRole
    }).returning();
    return row as EventMembership;
  }
  async hasMember(eventId: string, memberId: string): Promise<boolean> {
    const [row] = await db.select({ id: eventMembershipsTable.id }).from(
      eventMembershipsTable
    )
      .where(
        and(
          eq(eventMembershipsTable.eventId, eventId),
          eq(eventMembershipsTable.memberId, memberId)
        )
      );
    return Boolean(row);
  }
  async listMembers(eventId: string): Promise<EventMembership[]> {
    return await db.select().from(eventMembershipsTable).where(
      eq(eventMembershipsTable.eventId, eventId)
    ) as EventMembership[];
  }
  async updateMemberRole(
    eventId: string,
    memberId: string,
    eventRole: EventRole
  ): Promise<EventMembership | null> {
    const [row] = await db.update(eventMembershipsTable).set({
      eventRole,
      updatedAt: new Date()
    })
      .where(
        and(
          eq(eventMembershipsTable.eventId, eventId),
          eq(eventMembershipsTable.memberId, memberId)
        )
      ).returning();
    return (row as EventMembership | undefined) ?? null;
  }
  async removeMember(eventId: string, memberId: string): Promise<boolean> {
    const rows = await db.delete(eventMembershipsTable).where(
      and(
        eq(eventMembershipsTable.eventId, eventId),
        eq(eventMembershipsTable.memberId, memberId)
      )
    ).returning({ id: eventMembershipsTable.id });
    return rows.length > 0;
  }

  async addImage(
    eventId: string,
    imageUrl: string,
    altText: string,
    isMain: boolean
  ): Promise<EventImage> {
    const [row] = await db.insert(eventImagesTable).values({
      eventId,
      imageUrl,
      altText,
      isMain
    }).returning();
    return row as EventImage;
  }
  async listImages(eventId: string): Promise<EventImage[]> {
    return await db.select().from(eventImagesTable).where(
      eq(eventImagesTable.eventId, eventId)
    ) as EventImage[];
  }
  async updateImage(
    eventId: string,
    imageId: string,
    input: { imageUrl?: string; altText?: string; isMain?: boolean }
  ): Promise<EventImage | null> {
    const [row] = await db.update(eventImagesTable).set({
      ...input,
      updatedAt: new Date()
    })
      .where(
        and(
          eq(eventImagesTable.eventId, eventId),
          eq(eventImagesTable.id, imageId)
        )
      ).returning();
    return (row as EventImage | undefined) ?? null;
  }
  async deleteImage(eventId: string, imageId: string): Promise<boolean> {
    const rows = await db.delete(eventImagesTable).where(
      and(
        eq(eventImagesTable.eventId, eventId),
        eq(eventImagesTable.id, imageId)
      )
    ).returning({ id: eventImagesTable.id });
    return rows.length > 0;
  }
  async hasMainImage(eventId: string): Promise<boolean> {
    const [row] = await db.select({ id: eventImagesTable.id }).from(
      eventImagesTable
    )
      .where(
        and(
          eq(eventImagesTable.eventId, eventId),
          eq(eventImagesTable.isMain, true)
        )
      );
    return Boolean(row);
  }
  async setMainImage(
    eventId: string,
    imageId: string
  ): Promise<EventImage | null> {
    await db.update(eventImagesTable).set({
      isMain: false,
      updatedAt: new Date()
    }).where(eq(eventImagesTable.eventId, eventId));
    const [row] = await db.update(eventImagesTable).set({
      isMain: true,
      updatedAt: new Date()
    })
      .where(
        and(
          eq(eventImagesTable.eventId, eventId),
          eq(eventImagesTable.id, imageId)
        )
      ).returning();
    return (row as EventImage | undefined) ?? null;
  }

  async addSocialLink(
    eventId: string,
    platform: SocialPlatform,
    url: string,
    label: string | null
  ): Promise<SocialLink> {
    const [row] = await db.insert(eventSocialLinksTable).values({
      eventId,
      platform,
      url,
      label
    }).returning();
    return row as SocialLink;
  }
  async listSocialLinks(eventId: string): Promise<SocialLink[]> {
    return await db.select().from(eventSocialLinksTable).where(
      eq(eventSocialLinksTable.eventId, eventId)
    ) as SocialLink[];
  }
  async updateSocialLink(
    eventId: string,
    linkId: string,
    input: { platform?: SocialPlatform; url?: string; label?: string | null }
  ): Promise<SocialLink | null> {
    const [row] = await db.update(eventSocialLinksTable).set({
      ...input,
      updatedAt: new Date()
    })
      .where(
        and(
          eq(eventSocialLinksTable.eventId, eventId),
          eq(eventSocialLinksTable.id, linkId)
        )
      ).returning();
    return (row as SocialLink | undefined) ?? null;
  }
  async deleteSocialLink(eventId: string, linkId: string): Promise<boolean> {
    const rows = await db.delete(eventSocialLinksTable).where(
      and(
        eq(eventSocialLinksTable.eventId, eventId),
        eq(eventSocialLinksTable.id, linkId)
      )
    ).returning({ id: eventSocialLinksTable.id });
    return rows.length > 0;
  }

  async existsMemberById(id: string): Promise<boolean> {
    const [member] = await db.select({ id: membersTable.id }).from(
      membersTable
    ).where(eq(membersTable.id, id));
    return Boolean(member);
  }

  async existsProjectById(id: string): Promise<boolean> {
    const [project] = await db.select({ id: projectsTable.id }).from(
      projectsTable
    ).where(eq(projectsTable.id, id));
    return Boolean(project);
  }
}
