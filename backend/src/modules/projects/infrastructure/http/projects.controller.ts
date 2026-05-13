import type { Request, Response } from 'express';
import {
  sendAppError,
  sendSuccess,
  sendValidationError
} from '@shared/infrastructure/http/response.ts';
import { AddMemberToProjectUseCase } from '@projects/application/usecases/add-member-to-project.usecase.ts';
import { CreateProjectUseCase } from '@projects/application/usecases/create-project.usecase.ts';
import { DeleteProjectUseCase } from '@projects/application/usecases/delete-project.usecase.ts';
import { GetProjectByIdUseCase } from '@projects/application/usecases/get-project-by-id.usecase.ts';
import { ListProjectMembersUseCase } from '@projects/application/usecases/list-project-members.usecase.ts';
import { ListProjectsUseCase } from '@projects/application/usecases/list-projects.usecase.ts';
import { RemoveMemberFromProjectUseCase } from '@projects/application/usecases/remove-member-from-project.usecase.ts';
import { UpdateProjectMemberRoleUseCase } from '@projects/application/usecases/update-project-member-role.usecase.ts';
import { UpdateProjectUseCase } from '@projects/application/usecases/update-project.usecase.ts';
import {
  addProjectMemberBodySchema,
  createProjectBodySchema,
  projectIdParamsSchema,
  projectMemberParamsSchema,
  updateProjectBodySchema,
  updateProjectMemberRoleBodySchema
} from '@projects/infrastructure/validation/project.request.schemas.ts';

export class ProjectsController {
  constructor(
    private readonly createProject: CreateProjectUseCase,
    private readonly listProjects: ListProjectsUseCase,
    private readonly getProjectById: GetProjectByIdUseCase,
    private readonly updateProject: UpdateProjectUseCase,
    private readonly deleteProject: DeleteProjectUseCase,
    private readonly addMember: AddMemberToProjectUseCase,
    private readonly listMembers: ListProjectMembersUseCase,
    private readonly updateMemberRole: UpdateProjectMemberRoleUseCase,
    private readonly removeMember: RemoveMemberFromProjectUseCase
  ) {}

  create = async (req: Request, res: Response) => {
    const body = createProjectBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.createProject.execute(body.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  list = async (_req: Request, res: Response) => {
    const result = await this.listProjects.execute();
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  getById = async (req: Request, res: Response) => {
    const params = projectIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.getProjectById.execute(params.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  update = async (req: Request, res: Response) => {
    const params = projectIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const body = updateProjectBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateProject.execute(params.data.id, body.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  delete = async (req: Request, res: Response) => {
    const params = projectIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.deleteProject.execute(params.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  addProjectMember = async (req: Request, res: Response) => {
    const params = projectIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const body = addProjectMemberBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.addMember.execute(
      params.data.id,
      body.data.memberId,
      body.data.projectRole
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  listProjectMembers = async (req: Request, res: Response) => {
    const params = projectIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.listMembers.execute(params.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  updateProjectMemberRole = async (req: Request, res: Response) => {
    const params = projectMemberParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const body = updateProjectMemberRoleBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateMemberRole.execute(
      params.data.id,
      params.data.memberId,
      body.data.projectRole
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  removeProjectMember = async (req: Request, res: Response) => {
    const params = projectMemberParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.removeMember.execute(
      params.data.id,
      params.data.memberId
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
}
