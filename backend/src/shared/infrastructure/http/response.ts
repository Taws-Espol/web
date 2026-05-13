import type { Response } from 'express';
import { CommonErrorCode } from '@shared/application/errors/common-error-codes.ts';
import { commonErrorTypeByCode } from '@shared/application/errors/common-error-map.ts';
import { createAppError } from '@shared/application/errors/create-app-error.ts';
import { type AppError } from '@shared/application/errors/app-error.ts';
import {
  apiErrorFromAppError,
  statusFromAppError
} from '@shared/infrastructure/http/app-error-mapper.ts';
import type { ApiResponse } from '@shared/types/api-response.ts';

export function sendSuccess<T>(res: Response, data: T, status = 200) {
  const payload: ApiResponse<T> = { data, error: null };
  return res.status(status).json(payload);
}

export function sendAppError(
  res: Response,
  error: AppError,
  requestId?: string
) {
  return res.status(statusFromAppError(error)).json(
    apiErrorFromAppError(error, requestId)
  );
}

export function sendValidationError(
  res: Response,
  message: string,
  requestId?: string
) {
  const error = createAppError(
    CommonErrorCode.InvalidInput,
    commonErrorTypeByCode,
    { message }
  );
  return res.status(statusFromAppError(error)).json(
    apiErrorFromAppError(error, requestId)
  );
}
