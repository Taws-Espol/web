import { and, eq } from 'drizzle-orm';
import { db } from '@shared/infrastructure/db/drizzle.ts';
import type { MemberRepository } from '@projects/application/ports/member.repository.ts';
import type {
  CreateProjectInput,
  ProjectRepository,
  UpdateProjectInput
} from '@projects/application/ports/project.repository.ts';
import type { Project } from '@projects/domain/project.entity.ts';
import type { ProjectMembership } from '@projects/domain/project-membership.entity.ts';
import type { ProjectRole } from '@projects/domain/project-role.ts';
import { membersTable } from '@members/infrastructure/persistence/member.schema.ts';
import {
  projectMembershipsTable,
  projectsTable
} from '@projects/infrastructure/persistence/project.schema.ts';

export class ProjectDrizzleRepository
  implements ProjectRepository, MemberRepository {
  async create(input: CreateProjectInput): Promise<Project> {
    const [project] = await db.insert(projectsTable).values(input)
      .returning();
    return project as Project;
  }
  async findAll(): Promise<Project[]> {
    return await db.select().from(projectsTable) as Project[];
  }
  async findById(id: string): Promise<Project | null> {
    const [row] = await db.select().from(projectsTable).where(
      eq(projectsTable.id, id)
    );
    return (row as Project | undefined) ?? null;
  }
  async update(
    id: string,
    input: UpdateProjectInput
  ): Promise<Project | null> {
    const [row] = await db.update(projectsTable).set({
      ...input,
      updatedAt: new Date()
    }).where(eq(projectsTable.id, id)).returning();
    return (row as Project | undefined) ?? null;
  }
  async delete(id: string): Promise<boolean> {
    const rows = await db.delete(projectsTable).where(
      eq(projectsTable.id, id)
    ).returning({ id: projectsTable.id });
    return rows.length > 0;
  }
  async addMember(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<ProjectMembership> {
    const [row] = await db.insert(projectMembershipsTable).values({
      projectId,
      memberId,
      projectRole
    }).returning();
    return row as ProjectMembership;
  }
  async hasMember(projectId: string, memberId: string): Promise<boolean> {
    const [row] = await db.select({ id: projectMembershipsTable.id }).from(
      projectMembershipsTable
    )
      .where(
        and(
          eq(projectMembershipsTable.projectId, projectId),
          eq(projectMembershipsTable.memberId, memberId)
        )
      );
    return Boolean(row);
  }
  async listMembers(projectId: string): Promise<ProjectMembership[]> {
    return await db.select().from(projectMembershipsTable).where(
      eq(projectMembershipsTable.projectId, projectId)
    ) as ProjectMembership[];
  }
  async updateMemberRole(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<ProjectMembership | null> {
    const [row] = await db.update(projectMembershipsTable).set({
      projectRole,
      updatedAt: new Date()
    })
      .where(
        and(
          eq(projectMembershipsTable.projectId, projectId),
          eq(projectMembershipsTable.memberId, memberId)
        )
      ).returning();
    return (row as ProjectMembership | undefined) ?? null;
  }
  async removeMember(projectId: string, memberId: string): Promise<boolean> {
    const rows = await db.delete(projectMembershipsTable)
      .where(
        and(
          eq(projectMembershipsTable.projectId, projectId),
          eq(projectMembershipsTable.memberId, memberId)
        )
      )
      .returning({ id: projectMembershipsTable.id });
    return rows.length > 0;
  }
  async existsMemberById(id: string): Promise<boolean> {
    const [row] = await db.select({ id: membersTable.id }).from(
      membersTable
    ).where(eq(membersTable.id, id));
    return Boolean(row);
  }
}
