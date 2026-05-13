import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { ProjectErrorCode } from '@projects/application/errors/project-error-codes.ts';
import type { ProjectMembership } from '@projects/domain/project-membership.entity.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { ProjectRepository } from '@projects/application/ports/project.repository.ts';

export class ListProjectMembersUseCase {
  constructor(private readonly projects: ProjectRepository) {}
  async execute(
    projectId: string
  ): Promise<Result<ProjectMembership[], AppError>> {
    try {
      const project = await this.projects.findById(projectId);
      if (!project) {
        return fail(
          createAppError(ProjectErrorCode.NotFound, projectErrorTypeByCode, {
            message: 'Project not found'
          })
        );
      }
      return ok(await this.projects.listMembers(projectId));
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
