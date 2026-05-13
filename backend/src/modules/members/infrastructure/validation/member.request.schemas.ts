import { z } from 'zod';
import { ClubPosition } from '@members/domain/club-position.ts';
import { Department } from '@members/domain/department.ts';

const entryPeriodRegex = /^\d{4}-(I|II)$/;
const ecuadorPhoneRegex = /^0\d{9}$/;

export const memberIdParamsSchema = z.object({ id: z.string().uuid() });

export const createMemberBodySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  birthDate: z.iso.date(),
  phoneNumber: z.string().regex(
    ecuadorPhoneRegex,
    'Phone must be Ecuador format: 0XXXXXXXXX'
  ),
  enrollmentNumber: z.string().min(1),
  address: z.string().min(1),
  entryPeriod: z.string().regex(
    entryPeriodRegex,
    'entryPeriod must be YYYY-I or YYYY-II'
  ),
  faculty: z.string().min(1),
  degree: z.string().min(1),
  clubPosition: z.nativeEnum(ClubPosition),
  email: z.string().email(),
  githubUsername: z.string().min(1),
  linkedinUrl: z.string().url(),
  department: z.nativeEnum(Department)
});

export const updateMemberBodySchema = createMemberBodySchema.partial();
