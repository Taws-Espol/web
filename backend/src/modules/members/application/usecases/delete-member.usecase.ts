import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { memberErrorTypeByCode } from '@members/application/errors/member-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { MemberErrorCode } from '@members/application/errors/member-error-codes.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { MemberRepository } from '@members/application/ports/member.repository.ts';

export class DeleteMemberUseCase {
  constructor(private readonly members: MemberRepository) {}
  async execute(id: string): Promise<Result<{ deleted: true }, AppError>> {
    try {
      const deleted = await this.members.delete(id);
      if (!deleted) {
        return fail(
          createAppError(MemberErrorCode.NotFound, memberErrorTypeByCode, {
            message: 'Member not found'
          })
        );
      }
      return ok({ deleted: true });
    } catch (cause) {
      return fail(
        createAppError(CommonErrorCode.DatabaseError, memberErrorTypeByCode, {
          message: '',
          cause
        })
      );
    }
  }
}
