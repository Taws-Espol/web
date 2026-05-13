import type { EventRole } from '@events/domain/event-role.ts';

export type EventMembership = {
  id: string;
  eventId: string;
  memberId: string;
  eventRole: EventRole;
  createdAt: Date;
  updatedAt: Date;
};
