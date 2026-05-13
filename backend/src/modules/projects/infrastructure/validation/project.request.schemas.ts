import { z } from 'zod';
import { ProjectRole } from '@projects/domain/project-role.ts';

export const projectIdParamsSchema = z.object({ id: z.string().uuid() });
export const projectMemberParamsSchema = z.object({
  id: z.string().uuid(),
  memberId: z.string().uuid()
});

export const createProjectBodySchema = z.object({
  name: z.string().min(1),
  websiteUrl: z.string().url(),
  githubUrl: z.string().url(),
  imageUrl: z.string().url(),
  description: z.string().min(1)
});

export const updateProjectBodySchema = createProjectBodySchema.partial();
export const addProjectMemberBodySchema = z.object({
  memberId: z.string().uuid(),
  projectRole: z.nativeEnum(ProjectRole)
});
export const updateProjectMemberRoleBodySchema = z.object({
  projectRole: z.nativeEnum(ProjectRole)
});
