import type { Project } from '@projects/domain/project.entity.ts';
import type { ProjectMembership } from '@projects/domain/project-membership.entity.ts';
import type { ProjectRole } from '@projects/domain/project-role.ts';

export type CreateProjectInput = Omit<
  Project,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateProjectInput = Partial<CreateProjectInput>;

export interface ProjectRepository {
  create(input: CreateProjectInput): Promise<Project>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  update(id: string, input: UpdateProjectInput): Promise<Project | null>;
  delete(id: string): Promise<boolean>;

  addMember(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<ProjectMembership>;
  hasMember(projectId: string, memberId: string): Promise<boolean>;
  listMembers(projectId: string): Promise<ProjectMembership[]>;
  updateMemberRole(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<ProjectMembership | null>;
  removeMember(projectId: string, memberId: string): Promise<boolean>;
}
