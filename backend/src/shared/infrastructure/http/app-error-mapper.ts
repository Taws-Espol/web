import {
  type AppError,
  type AppErrorType
} from '@shared/application/errors/app-error.ts';
import type { ApiResponse } from '@shared/types/api-response.ts';

export function statusFromAppError(error: AppError): number {
  switch (error.type as AppErrorType) {
    case 'validation':
      return 422;
    case 'not_found':
      return 404;
    case 'conflict':
      return 409;
    case 'unauthorized':
      return 401;
    case 'forbidden':
      return 403;
    case 'external_service':
      return 502;
    case 'unexpected':
      return 500;
  }
}

export function apiErrorFromAppError(
  error: AppError,
  requestId?: string
): ApiResponse<never> {
  return {
    data: null,
    error: {
      code: error.code,
      message: error.message,
      fields: error.fields,
      requestId
    }
  };
}
