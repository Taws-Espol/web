export const MemberErrorCode = {
  NotFound: 'MEMBER_NOT_FOUND',
  Conflict: 'MEMBER_CONFLICT'
} as const;

export type MemberErrorCode =
  (typeof MemberErrorCode)[keyof typeof MemberErrorCode];
