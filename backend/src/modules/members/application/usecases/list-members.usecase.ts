import { type AppError } from '@shared/application/errors/app-error.ts';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { memberErrorTypeByCode } from '@members/application/errors/member-error.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import type { Member } from '@members/domain/member.entity.ts';
import { fail, ok, type Result } from '@shared/types/result.ts';
import type { MemberRepository } from '@members/application/ports/member.repository.ts';

export class ListMembersUseCase {
  constructor(private readonly members: MemberRepository) {}
  async execute(): Promise<Result<Member[], AppError>> {
    try {
      return ok(await this.members.findAll());
    } catch (cause) {
      console.log(cause)
      return fail(
        createAppError(CommonErrorCode.DatabaseError, memberErrorTypeByCode, {
          message: '',
          cause
        })
      );
    }
  }
}
