export const CommonErrorCode = {
  Unexpected: 'UNEXPECTED',
  InvalidInput: 'INVALID_INPUT',
  ValidationFailed: 'VALIDATION_FAILED',
  Unauthorized: 'UNAUTHORIZED',
  Forbidden: 'FORBIDDEN',
  ExternalServiceFailed: 'EXTERNAL_SERVICE_FAILED',
  DatabaseError: 'DATABASE_ERROR'
} as const;

export type CommonErrorCode =
  (typeof CommonErrorCode)[keyof typeof CommonErrorCode];
