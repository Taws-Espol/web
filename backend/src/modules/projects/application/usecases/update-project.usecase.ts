import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { ProjectErrorCode } from '@projects/application/errors/project-error-codes.ts';
import type { Project } from '@projects/domain/project.entity.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type {
  ProjectRepository,
  UpdateProjectInput
} from '@projects/application/ports/project.repository.ts';

export class UpdateProjectUseCase {
  constructor(private readonly projects: ProjectRepository) {}
  async execute(
    id: string,
    input: UpdateProjectInput
  ): Promise<Result<Project, AppError>> {
    try {
      const project = await this.projects.update(id, input);
      if (!project) {
        return fail(
          createAppError(ProjectErrorCode.NotFound, projectErrorTypeByCode, {
            message: 'Project not found'
          })
        );
      }
      return ok(project);
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
