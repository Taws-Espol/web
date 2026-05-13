import { z } from 'zod';
import {
  createMemberBodySchema,
  memberIdParamsSchema,
  updateMemberBodySchema
} from '@members/infrastructure/validation/member.request.schemas.ts';
import {
  memberDeletedResponseSchema,
  memberResponseSchema
} from '@members/infrastructure/validation/member.response.schemas.ts';
import { openApiRegistry } from '@shared/infrastructure/http/openapi/registry.ts';
import {
  apiSuccessResponseSchema
} from '@shared/infrastructure/validation/schemas.ts';

export function registerMembersDocs() {
  openApiRegistry.registerPath({
    method: 'post',
    path: '/members',
    tags: ['Members'],
    summary: 'Create member',
    request: {
      body: {
        content: {
          'application/json': {
            schema: createMemberBodySchema
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Member created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(memberResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'get',
    path: '/members',
    tags: ['Members'],
    summary: 'List members',
    responses: {
      200: {
        description: 'Members list',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(z.array(memberResponseSchema))
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'get',
    path: '/members/{id}',
    tags: ['Members'],
    summary: 'Get member by id',
    request: {
      params: memberIdParamsSchema
    },
    responses: {
      200: {
        description: 'Member',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(memberResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'patch',
    path: '/members/{id}',
    tags: ['Members'],
    summary: 'Update member',
    request: {
      params: memberIdParamsSchema,
      body: {
        content: {
          'application/json': {
            schema: updateMemberBodySchema
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Updated member',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(memberResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'delete',
    path: '/members/{id}',
    tags: ['Members'],
    summary: 'Delete member',
    request: {
      params: memberIdParamsSchema
    },
    responses: {
      200: {
        description: 'Member deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(memberDeletedResponseSchema)
          }
        }
      }
    }
  });
}
