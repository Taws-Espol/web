import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { ProjectErrorCode } from '@projects/application/errors/project-error-codes.ts';
import type { ProjectMembership } from '@projects/domain/project-membership.entity.ts';
import type { ProjectRole } from '@projects/domain/project-role.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { ProjectRepository } from '@projects/application/ports/project.repository.ts';

export class UpdateProjectMemberRoleUseCase {
  constructor(private readonly projects: ProjectRepository) {}
  async execute(
    projectId: string,
    memberId: string,
    projectRole: ProjectRole
  ): Promise<Result<ProjectMembership, AppError>> {
    try {
      const membership = await this.projects.updateMemberRole(
        projectId,
        memberId,
        projectRole
      );
      if (!membership) {
        return fail(
          createAppError(
            ProjectErrorCode.MembershipNotFound,
            projectErrorTypeByCode,
            { message: 'Project membership not found' }
          )
        );
      }
      return ok(membership);
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
