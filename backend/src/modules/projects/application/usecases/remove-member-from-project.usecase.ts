import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { ProjectErrorCode } from '@projects/application/errors/project-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { ProjectRepository } from '@projects/application/ports/project.repository.ts';

export class RemoveMemberFromProjectUseCase {
  constructor(private readonly projects: ProjectRepository) {}
  async execute(
    projectId: string,
    memberId: string
  ): Promise<Result<{ deleted: true }, AppError>> {
    try {
      const removed = await this.projects.removeMember(projectId, memberId);
      if (!removed) {
        return fail(
          createAppError(
            ProjectErrorCode.MembershipNotFound,
            projectErrorTypeByCode,
            { message: 'Project membership not found' }
          )
        );
      }
      return ok({ deleted: true });
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
