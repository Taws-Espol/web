import { z } from 'zod';
import { ProjectRole } from '@projects/domain/project-role.ts';

export const projectResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  websiteUrl: z.string().url(),
  githubUrl: z.string().url(),
  imageUrl: z.string().url(),
  description: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const projectMembershipResponseSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  memberId: z.string().uuid(),
  projectRole: z.nativeEnum(ProjectRole),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const projectDeletedResponseSchema = z.object({
  deleted: z.literal(true)
});
