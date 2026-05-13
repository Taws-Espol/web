import { type AppErrorType } from '@shared/application/errors/app-error.ts';
import {
  CommonErrorCode,
  type CommonErrorCode as CommonErrorCodeType
} from '@shared/application/errors/common-error-codes.ts';
import { commonErrorTypeByCode } from '@shared/application/errors/common-error-map.ts';
import {
  EventErrorCode,
  type EventErrorCode as EventErrorCodeType
} from '@events/application/errors/event-error-codes.ts';

export const EventAppErrorCode = {
  ...CommonErrorCode,
  ...EventErrorCode
} as const;

export type EventAppErrorCode = CommonErrorCodeType | EventErrorCodeType;

export const eventErrorTypeByCode = {
  ...commonErrorTypeByCode,
  [EventErrorCode.MemberNotFound]: 'not_found',
  [EventErrorCode.ProjectNotFound]: 'not_found',
  [EventErrorCode.EventNotFound]: 'not_found',
  [EventErrorCode.EventMembershipNotFound]: 'not_found',
  [EventErrorCode.EventImageNotFound]: 'not_found',
  [EventErrorCode.EventSocialLinkNotFound]: 'not_found',
  [EventErrorCode.MemberAlreadyInEvent]: 'conflict',
  [EventErrorCode.EventMainImageAlreadyExists]: 'conflict'
} satisfies Record<EventAppErrorCode, AppErrorType>;
