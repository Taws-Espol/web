import { z } from 'zod';
import { ClubPosition } from '@members/domain/club-position.ts';
import { Department } from '@members/domain/department.ts';

export const memberResponseSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.string(),
  phoneNumber: z.string(),
  enrollmentNumber: z.string(),
  address: z.string(),
  entryPeriod: z.string(),
  faculty: z.string(),
  degree: z.string(),
  clubPosition: z.nativeEnum(ClubPosition),
  email: z.string().email(),
  githubUsername: z.string(),
  linkedinUrl: z.string().url(),
  department: z.nativeEnum(Department),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const memberDeletedResponseSchema = z.object({
  deleted: z.literal(true)
});
