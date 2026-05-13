import type { Request, Response } from 'express';
import {
  sendAppError,
  sendSuccess,
  sendValidationError
} from '@shared/infrastructure/http/response.ts';
import { CreateMemberUseCase } from '@members/application/usecases/create-member.usecase.ts';
import { ListMembersUseCase } from '@members/application/usecases/list-members.usecase.ts';
import { GetMemberByIdUseCase } from '@members/application/usecases/get-member-by-id.usecase.ts';
import { UpdateMemberUseCase } from '@members/application/usecases/update-member.usecase.ts';
import { DeleteMemberUseCase } from '@members/application/usecases/delete-member.usecase.ts';
import {
  createMemberBodySchema,
  memberIdParamsSchema,
  updateMemberBodySchema
} from '@members/infrastructure/validation/member.request.schemas.ts';

export class MembersController {
  constructor(
    private readonly createMember: CreateMemberUseCase,
    private readonly listMembers: ListMembersUseCase,
    private readonly getMemberById: GetMemberByIdUseCase,
    private readonly updateMember: UpdateMemberUseCase,
    private readonly deleteMember: DeleteMemberUseCase
  ) {}

  create = async (req: Request, res: Response) => {
    const body = createMemberBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid request body'
      );
    }
    const result = await this.createMember.execute(body.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };

  list = async (_req: Request, res: Response) => {
    const result = await this.listMembers.execute();
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  getById = async (req: Request, res: Response) => {
    const params = memberIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.getMemberById.execute(params.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  update = async (req: Request, res: Response) => {
    const params = memberIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const body = updateMemberBodySchema.safeParse(req.body);
    if (!body.success) {
      return sendValidationError(
        res,
        body.error.issues[0]?.message ?? 'Invalid request body'
      );
    }
    const result = await this.updateMember.execute(params.data.id, body.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  delete = async (req: Request, res: Response) => {
    const params = memberIdParamsSchema.safeParse(req.params);
    if (!params.success) {
      return sendValidationError(
        res,
        params.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.deleteMember.execute(params.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
}
