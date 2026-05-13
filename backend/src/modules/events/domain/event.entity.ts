import type { EventType } from '@events/domain/event-type.ts';

export type Event = {
  id: string;
  name: string;
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  location: string;
  associatedProjectId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
