import type { ProjectRole } from '@projects/domain/project-role.ts';

export type ProjectMembership = {
  id: string;
  projectId: string;
  memberId: string;
  projectRole: ProjectRole;
  createdAt: Date;
  updatedAt: Date;
};
