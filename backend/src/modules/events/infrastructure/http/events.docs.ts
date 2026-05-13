import { z } from 'zod';
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
import {
  eventDeletedResponseSchema,
  eventImageResponseSchema,
  eventMembershipResponseSchema,
  eventResponseSchema,
  eventSocialLinkResponseSchema
} from '@events/infrastructure/validation/event.response.schemas.ts';
import { openApiRegistry } from '@shared/infrastructure/http/openapi/registry.ts';
import {
  apiSuccessResponseSchema
} from '@shared/infrastructure/validation/schemas.ts';

export function registerEventsDocs() {
  openApiRegistry.registerPath({
    method: 'post',
    path: '/events',
    tags: ['Events'],
    summary: 'Create event',
    request: {
      body: {
        content: { 'application/json': { schema: createEventBodySchema } }
      }
    },
    responses: {
      201: {
        description: 'Event created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/events',
    tags: ['Events'],
    summary: 'List events',
    responses: {
      200: {
        description: 'Events list',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(z.array(eventResponseSchema))
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/events/{id}',
    tags: ['Events'],
    summary: 'Get event by id',
    request: { params: eventIdParamsSchema },
    responses: {
      200: {
        description: 'Event',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}',
    tags: ['Events'],
    summary: 'Update event',
    request: {
      params: eventIdParamsSchema,
      body: {
        content: { 'application/json': { schema: updateEventBodySchema } }
      }
    },
    responses: {
      200: {
        description: 'Updated event',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/events/{id}',
    tags: ['Events'],
    summary: 'Delete event',
    request: { params: eventIdParamsSchema },
    responses: {
      200: {
        description: 'Event deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventDeletedResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'post',
    path: '/events/{id}/members',
    tags: ['Events'],
    summary: 'Add member to event',
    request: {
      params: eventIdParamsSchema,
      body: {
        content: { 'application/json': { schema: addEventMemberBodySchema } }
      }
    },
    responses: {
      201: {
        description: 'Event membership created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventMembershipResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/events/{id}/members',
    tags: ['Events'],
    summary: 'List event members',
    request: { params: eventIdParamsSchema },
    responses: {
      200: {
        description: 'Event memberships',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(
              z.array(eventMembershipResponseSchema)
            )
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}/members/{memberId}',
    tags: ['Events'],
    summary: 'Update event member role',
    request: {
      params: eventMemberParamsSchema,
      body: {
        content: {
          'application/json': { schema: updateEventMemberRoleBodySchema }
        }
      }
    },
    responses: {
      200: {
        description: 'Updated event membership',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventMembershipResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/events/{id}/members/{memberId}',
    tags: ['Events'],
    summary: 'Remove member from event',
    request: { params: eventMemberParamsSchema },
    responses: {
      200: {
        description: 'Event membership deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventDeletedResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'post',
    path: '/events/{id}/images',
    tags: ['Events'],
    summary: 'Add event image',
    request: {
      params: eventIdParamsSchema,
      body: {
        content: { 'application/json': { schema: addEventImageBodySchema } }
      }
    },
    responses: {
      201: {
        description: 'Event image created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventImageResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/events/{id}/images',
    tags: ['Events'],
    summary: 'List event images',
    request: { params: eventIdParamsSchema },
    responses: {
      200: {
        description: 'Event images',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(z.array(eventImageResponseSchema))
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}/images/{imageId}',
    tags: ['Events'],
    summary: 'Update event image',
    request: {
      params: eventImageParamsSchema,
      body: {
        content: { 'application/json': { schema: updateEventImageBodySchema } }
      }
    },
    responses: {
      200: {
        description: 'Updated event image',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventImageResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/events/{id}/images/{imageId}',
    tags: ['Events'],
    summary: 'Delete event image',
    request: { params: eventImageParamsSchema },
    responses: {
      200: {
        description: 'Event image deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventDeletedResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}/images/{imageId}/main',
    tags: ['Events'],
    summary: 'Set main event image',
    request: { params: eventImageParamsSchema },
    responses: {
      200: {
        description: 'Main image updated',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventImageResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'post',
    path: '/events/{id}/social-links',
    tags: ['Events'],
    summary: 'Add event social link',
    request: {
      params: eventIdParamsSchema,
      body: {
        content: {
          'application/json': { schema: addEventSocialLinkBodySchema }
        }
      }
    },
    responses: {
      201: {
        description: 'Social link created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventSocialLinkResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/events/{id}/social-links',
    tags: ['Events'],
    summary: 'List event social links',
    request: { params: eventIdParamsSchema },
    responses: {
      200: {
        description: 'Event social links',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(
              z.array(eventSocialLinkResponseSchema)
            )
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}/social-links/{linkId}',
    tags: ['Events'],
    summary: 'Update event social link',
    request: {
      params: eventLinkParamsSchema,
      body: {
        content: {
          'application/json': { schema: updateEventSocialLinkBodySchema }
        }
      }
    },
    responses: {
      200: {
        description: 'Updated social link',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventSocialLinkResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/events/{id}/social-links/{linkId}',
    tags: ['Events'],
    summary: 'Delete event social link',
    request: { params: eventLinkParamsSchema },
    responses: {
      200: {
        description: 'Social link deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventDeletedResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'patch',
    path: '/events/{id}/hackathon-project',
    tags: ['Events'],
    summary: 'Set hackathon project association',
    request: {
      params: eventIdParamsSchema,
      body: {
        content: {
          'application/json': { schema: setHackathonProjectBodySchema }
        }
      }
    },
    responses: {
      200: {
        description: 'Updated event project association',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(eventResponseSchema)
          }
        }
      }
    }
  });
}
