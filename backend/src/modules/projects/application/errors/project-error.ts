import { type AppErrorType } from '@shared/application/errors/app-error.ts';
import {
  CommonErrorCode,
  type CommonErrorCode as CommonErrorCodeType
} from '@shared/application/errors/common-error-codes.ts';
import { commonErrorTypeByCode } from '@shared/application/errors/common-error-map.ts';
import {
  ProjectErrorCode,
  type ProjectErrorCode as ProjectErrorCodeType
} from '@projects/application/errors/project-error-codes.ts';

export const ProjectAppErrorCode = {
  ...CommonErrorCode,
  ...ProjectErrorCode
} as const;

export type ProjectAppErrorCode = CommonErrorCodeType | ProjectErrorCodeType;

export const projectErrorTypeByCode = {
  ...commonErrorTypeByCode,
  [ProjectErrorCode.MemberNotFound]: 'not_found',
  [ProjectErrorCode.NotFound]: 'not_found',
  [ProjectErrorCode.MembershipNotFound]: 'not_found',
  [ProjectErrorCode.MemberAlreadyInProject]: 'conflict'
} satisfies Record<ProjectAppErrorCode, AppErrorType>;
