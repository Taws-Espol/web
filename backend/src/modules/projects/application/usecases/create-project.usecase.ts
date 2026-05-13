import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { projectErrorTypeByCode } from '@projects/application/errors/project-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import type { Project } from '@projects/domain/project.entity.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type {
  CreateProjectInput,
  ProjectRepository
} from '@projects/application/ports/project.repository.ts';

export class CreateProjectUseCase {
  constructor(private readonly projects: ProjectRepository) {}
  async execute(input: CreateProjectInput): Promise<Result<Project, AppError>> {
    try {
      return ok(await this.projects.create(input));
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
