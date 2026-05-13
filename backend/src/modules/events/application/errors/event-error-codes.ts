export const EventErrorCode = {
  MemberNotFound: 'MEMBER_NOT_FOUND',
  ProjectNotFound: 'PROJECT_NOT_FOUND',
  EventNotFound: 'EVENT_NOT_FOUND',
  EventMembershipNotFound: 'EVENT_MEMBERSHIP_NOT_FOUND',
  EventImageNotFound: 'EVENT_IMAGE_NOT_FOUND',
  EventSocialLinkNotFound: 'EVENT_SOCIAL_LINK_NOT_FOUND',
  MemberAlreadyInEvent: 'MEMBER_ALREADY_IN_EVENT',
  EventMainImageAlreadyExists: 'EVENT_MAIN_IMAGE_ALREADY_EXISTS'
} as const;

export type EventErrorCode =
  (typeof EventErrorCode)[keyof typeof EventErrorCode];
