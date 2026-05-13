export const ProjectErrorCode = {
  MemberNotFound: 'MEMBER_NOT_FOUND',
  NotFound: 'PROJECT_NOT_FOUND',
  MembershipNotFound: 'PROJECT_MEMBERSHIP_NOT_FOUND',
  MemberAlreadyInProject: 'MEMBER_ALREADY_IN_PROJECT'
} as const;

export type ProjectErrorCode =
  (typeof ProjectErrorCode)[keyof typeof ProjectErrorCode];
