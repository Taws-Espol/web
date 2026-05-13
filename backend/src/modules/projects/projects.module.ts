import { AddMemberToProjectUseCase } from '@projects/application/usecases/add-member-to-project.usecase.ts';
import { CreateProjectUseCase } from '@projects/application/usecases/create-project.usecase.ts';
import { DeleteProjectUseCase } from '@projects/application/usecases/delete-project.usecase.ts';
import { GetProjectByIdUseCase } from '@projects/application/usecases/get-project-by-id.usecase.ts';
import { ListProjectMembersUseCase } from '@projects/application/usecases/list-project-members.usecase.ts';
import { ListProjectsUseCase } from '@projects/application/usecases/list-projects.usecase.ts';
import { RemoveMemberFromProjectUseCase } from '@projects/application/usecases/remove-member-from-project.usecase.ts';
import { UpdateProjectMemberRoleUseCase } from '@projects/application/usecases/update-project-member-role.usecase.ts';
import { UpdateProjectUseCase } from '@projects/application/usecases/update-project.usecase.ts';
import { ProjectsController } from '@projects/infrastructure/http/projects.controller.ts';
import { createProjectsRoutes } from '@projects/infrastructure/http/projects.routes.ts';
import { ProjectDrizzleRepository } from '@projects/infrastructure/persistence/project.drizzle.repository.ts';

export function createProjectsModule() {
  const repository = new ProjectDrizzleRepository();
  const controller = new ProjectsController(
    new CreateProjectUseCase(repository),
    new ListProjectsUseCase(repository),
    new GetProjectByIdUseCase(repository),
    new UpdateProjectUseCase(repository),
    new DeleteProjectUseCase(repository),
    new AddMemberToProjectUseCase(repository, repository),
    new ListProjectMembersUseCase(repository),
    new UpdateProjectMemberRoleUseCase(repository),
    new RemoveMemberFromProjectUseCase(repository)
  );
  return createProjectsRoutes(controller);
}
