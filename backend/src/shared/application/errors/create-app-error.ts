import {
  AppError,
  type AppErrorType
} from '@shared/application/errors/app-error.ts';

export type AppErrorOptions = {
  message?: string;
  fields?: Record<string, string>;
  cause?: unknown;
};

export function createAppError<TCode extends string>(
  code: TCode,
  errorTypeByCode: Record<TCode, AppErrorType>,
  options: AppErrorOptions = {}
): AppError {
  return new AppError(
    errorTypeByCode[code],
    code,
    options.message ?? code,
    options.fields,
    options.cause
  );
}
