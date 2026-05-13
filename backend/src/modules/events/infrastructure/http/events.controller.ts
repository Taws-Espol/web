import type { Request, Response } from 'express';
import {
  sendAppError,
  sendSuccess,
  sendValidationError
} from '@shared/infrastructure/http/response.ts';
import { AddEventImageUseCase } from '@events/application/usecases/add-event-image.usecase.ts';
import { AddEventSocialLinkUseCase } from '@events/application/usecases/add-event-social-link.usecase.ts';
import { AddMemberToEventUseCase } from '@events/application/usecases/add-member-to-event.usecase.ts';
import { CreateEventUseCase } from '@events/application/usecases/create-event.usecase.ts';
import { DeleteEventImageUseCase } from '@events/application/usecases/delete-event-image.usecase.ts';
import { DeleteEventSocialLinkUseCase } from '@events/application/usecases/delete-event-social-link.usecase.ts';
import { DeleteEventUseCase } from '@events/application/usecases/delete-event.usecase.ts';
import { GetEventByIdUseCase } from '@events/application/usecases/get-event-by-id.usecase.ts';
import { ListEventImagesUseCase } from '@events/application/usecases/list-event-images.usecase.ts';
import { ListEventMembersUseCase } from '@events/application/usecases/list-event-members.usecase.ts';
import { ListEventSocialLinksUseCase } from '@events/application/usecases/list-event-social-links.usecase.ts';
import { ListEventsUseCase } from '@events/application/usecases/list-events.usecase.ts';
import { RemoveMemberFromEventUseCase } from '@events/application/usecases/remove-member-from-event.usecase.ts';
import { SetHackathonProjectUseCase } from '@events/application/usecases/set-hackathon-project.usecase.ts';
import { SetMainEventImageUseCase } from '@events/application/usecases/set-main-event-image.usecase.ts';
import { UpdateEventImageUseCase } from '@events/application/usecases/update-event-image.usecase.ts';
import { UpdateEventMemberRoleUseCase } from '@events/application/usecases/update-event-member-role.usecase.ts';
import { UpdateEventSocialLinkUseCase } from '@events/application/usecases/update-event-social-link.usecase.ts';
import { UpdateEventUseCase } from '@events/application/usecases/update-event.usecase.ts';
import {
  addEventImageBodySchema,
  addEventMemberBodySchema,
  addEventSocialLinkBodySchema,
  createEventBodySchema,
  eventIdParamsSchema,
  eventImageParamsSchema,
  eventLinkParamsSchema,
  eventMemberParamsSchema,
  setHackathonProjectBodySchema,
  updateEventBodySchema,
  updateEventImageBodySchema,
  updateEventMemberRoleBodySchema,
  updateEventSocialLinkBodySchema
} from '@events/infrastructure/validation/event.request.schemas.ts';

export class EventsController {
  constructor(
    private readonly createEvent: CreateEventUseCase,
    private readonly listEvents: ListEventsUseCase,
    private readonly getEventById: GetEventByIdUseCase,
    private readonly updateEvent: UpdateEventUseCase,
    private readonly deleteEvent: DeleteEventUseCase,
    private readonly addMember: AddMemberToEventUseCase,
    private readonly listMembers: ListEventMembersUseCase,
    private readonly updateMemberRole: UpdateEventMemberRoleUseCase,
    private readonly removeMember: RemoveMemberFromEventUseCase,
    private readonly addImage: AddEventImageUseCase,
    private readonly listImages: ListEventImagesUseCase,
    private readonly updateImage: UpdateEventImageUseCase,
    private readonly deleteImage: DeleteEventImageUseCase,
    private readonly setMainImage: SetMainEventImageUseCase,
    private readonly addSocialLink: AddEventSocialLinkUseCase,
    private readonly listSocialLinks: ListEventSocialLinksUseCase,
    private readonly updateSocialLink: UpdateEventSocialLinkUseCase,
    private readonly deleteSocialLink: DeleteEventSocialLinkUseCase,
    private readonly setHackathonProject: SetHackathonProjectUseCase
  ) {}

  create = async (req: Request, res: Response) => {
    const b = createEventBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.createEvent.execute(b.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  list = async (_req: Request, res: Response) => {
    const result = await this.listEvents.execute();
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  getById = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.getEventById.execute(p.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  update = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = updateEventBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateEvent.execute(p.data.id, b.data);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  delete = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.deleteEvent.execute(p.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  addEventMember = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = addEventMemberBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.addMember.execute(
      p.data.id,
      b.data.memberId,
      b.data.eventRole
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  listEventMembers = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.listMembers.execute(p.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  updateEventMemberRole = async (req: Request, res: Response) => {
    const p = eventMemberParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = updateEventMemberRoleBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateMemberRole.execute(
      p.data.id,
      p.data.memberId,
      b.data.eventRole
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  removeEventMember = async (req: Request, res: Response) => {
    const p = eventMemberParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.removeMember.execute(p.data.id, p.data.memberId);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  addEventImage = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = addEventImageBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.addImage.execute(
      p.data.id,
      b.data.imageUrl,
      b.data.altText,
      b.data.isMain
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  listEventImages = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.listImages.execute(p.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  updateEventImage = async (req: Request, res: Response) => {
    const p = eventImageParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = updateEventImageBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateImage.execute(
      p.data.id,
      p.data.imageId,
      b.data
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  deleteEventImage = async (req: Request, res: Response) => {
    const p = eventImageParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.deleteImage.execute(p.data.id, p.data.imageId);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  setMainEventImage = async (req: Request, res: Response) => {
    const p = eventImageParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.setMainImage.execute(p.data.id, p.data.imageId);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  addEventSocialLink = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = addEventSocialLinkBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.addSocialLink.execute(
      p.data.id,
      b.data.platform,
      b.data.url,
      b.data.label
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data, 201);
  };
  listEventSocialLinks = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.listSocialLinks.execute(p.data.id);
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  updateEventSocialLink = async (req: Request, res: Response) => {
    const p = eventLinkParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = updateEventSocialLinkBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.updateSocialLink.execute(
      p.data.id,
      p.data.linkId,
      b.data
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
  deleteEventSocialLink = async (req: Request, res: Response) => {
    const p = eventLinkParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const result = await this.deleteSocialLink.execute(
      p.data.id,
      p.data.linkId
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };

  setHackathonProjectForEvent = async (req: Request, res: Response) => {
    const p = eventIdParamsSchema.safeParse(req.params);
    if (!p.success) {
      return sendValidationError(
        res,
        p.error.issues[0]?.message ?? 'Invalid params'
      );
    }
    const b = setHackathonProjectBodySchema.safeParse(req.body);
    if (!b.success) {
      return sendValidationError(
        res,
        b.error.issues[0]?.message ?? 'Invalid body'
      );
    }
    const result = await this.setHackathonProject.execute(
      p.data.id,
      b.data.associatedProjectId
    );
    if (!result.ok) return sendAppError(res, result.error);
    return sendSuccess(res, result.data);
  };
}
