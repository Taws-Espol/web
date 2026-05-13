import { type AppErrorType } from '@shared/application/errors/app-error.ts';
import {
  CommonErrorCode,
  type CommonErrorCode as CommonErrorCodeType
} from '@shared/application/errors/common-error-codes.ts';
import { commonErrorTypeByCode } from '@shared/application/errors/common-error-map.ts';
import {
  MemberErrorCode,
  type MemberErrorCode as MemberErrorCodeType
} from '@members/application/errors/member-error-codes.ts';

export const MemberAppErrorCode = {
  ...CommonErrorCode,
  ...MemberErrorCode
} as const;

export type MemberAppErrorCode = CommonErrorCodeType | MemberErrorCodeType;

export const memberErrorTypeByCode = {
  ...commonErrorTypeByCode,
  [MemberErrorCode.NotFound]: 'not_found',
  [MemberErrorCode.Conflict]: 'conflict'
} satisfies Record<MemberAppErrorCode, AppErrorType>;
