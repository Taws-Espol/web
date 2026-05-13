export type AppErrorType =
  | 'validation'
  | 'not_found'
  | 'conflict'
  | 'unauthorized'
  | 'forbidden'
  | 'external_service'
  | 'unexpected';

export class AppError {
  constructor(
    public readonly type: AppErrorType,
    public readonly code: string,
    public readonly message: string,
    public readonly fields?: Record<string, string>,
    public readonly cause?: unknown
  ) {}
}
