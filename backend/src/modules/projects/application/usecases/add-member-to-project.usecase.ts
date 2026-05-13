import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { ProjectErrorCode } from '@projects/application/errors/project-error-codes.ts';
import type { ProjectMembership } from '@projects/domain/project-membership.entity.ts';
import type { ProjectRole } from '@projects/domain/project-role.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { MemberRepository } from '@projects/application/ports/member.repository.ts';
import type { ProjectRepository } from '@projects/application/ports/project.repository.ts';

export class AddMemberToProjectUseCase {
  constructor(
    private readonly projects: ProjectRepository,
    private readonly members: MemberRepository
  ) {}
  async execute(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<Result<ProjectMembership, AppError>> {
    try {
      const project = await this.projects.findById(projectId);
      if (!project) {
        return fail(
          createAppError(ProjectErrorCode.NotFound, projectErrorTypeByCode, {
            message: 'Project not found'
          })
        );
      }
      if (!await this.members.existsMemberById(memberId)) {
        return fail(
          createAppError(
            ProjectErrorCode.MemberNotFound,
            projectErrorTypeByCode,
            { message: 'Member not found' }
          )
        );
      }
      if (await this.projects.hasMember(projectId, memberId)) {
        return fail(
          createAppError(
            ProjectErrorCode.MemberAlreadyInProject,
            projectErrorTypeByCode,
            { message: 'Member already in project' }
          )
        );
      }
      return ok(
        await this.projects.addMember(projectId, memberId, projectRole)
      );
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, projectErrorTypeByCode, {
          message: '',
          cause
        })
      );
    }
  }
}
