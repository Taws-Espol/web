import type { AppErrorType } from '@shared/application/errors/app-error.ts';
import {
  CommonErrorCode,
  type CommonErrorCode as CommonErrorCodeType
} from '@shared/application/errors/common-error-codes.ts';

export const commonErrorTypeByCode = {
  [CommonErrorCode.Unexpected]: 'unexpected',
  [CommonErrorCode.InvalidInput]: 'validation',
  [CommonErrorCode.ValidationFailed]: 'validation',
  [CommonErrorCode.Unauthorized]: 'unauthorized',
  [CommonErrorCode.Forbidden]: 'forbidden',
  [CommonErrorCode.ExternalServiceFailed]: 'external_service',
  [CommonErrorCode.DatabaseError]: 'external_service'
} satisfies Record<CommonErrorCodeType, AppErrorType>;
