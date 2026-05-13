import { z } from 'zod';
import {
  addProjectMemberBodySchema,
  createProjectBodySchema,
  projectIdParamsSchema,
  projectMemberParamsSchema,
  updateProjectBodySchema,
  updateProjectMemberRoleBodySchema
} from '@projects/infrastructure/validation/project.request.schemas.ts';
import {
  projectDeletedResponseSchema,
  projectMembershipResponseSchema,
  projectResponseSchema
} from '@projects/infrastructure/validation/project.response.schemas.ts';
import { openApiRegistry } from '@shared/infrastructure/http/openapi/registry.ts';
import {
  apiSuccessResponseSchema
} from '@shared/infrastructure/validation/schemas.ts';

export function registerProjectsDocs() {
  openApiRegistry.registerPath({
    method: 'post',
    path: '/projects',
    tags: ['Projects'],
    summary: 'Create project',
    request: {
      body: {
        content: { 'application/json': { schema: createProjectBodySchema } }
      }
    },
    responses: {
      201: {
        description: 'Project created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/projects',
    tags: ['Projects'],
    summary: 'List projects',
    responses: {
      200: {
        description: 'Projects list',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(z.array(projectResponseSchema))
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/projects/{id}',
    tags: ['Projects'],
    summary: 'Get project by id',
    request: { params: projectIdParamsSchema },
    responses: {
      200: {
        description: 'Project',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/projects/{id}',
    tags: ['Projects'],
    summary: 'Update project',
    request: {
      params: projectIdParamsSchema,
      body: {
        content: { 'application/json': { schema: updateProjectBodySchema } }
      }
    },
    responses: {
      200: {
        description: 'Updated project',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/projects/{id}',
    tags: ['Projects'],
    summary: 'Delete project',
    request: { params: projectIdParamsSchema },
    responses: {
      200: {
        description: 'Project deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectDeletedResponseSchema)
          }
        }
      }
    }
  });

  openApiRegistry.registerPath({
    method: 'post',
    path: '/projects/{id}/members',
    tags: ['Projects'],
    summary: 'Add member to project',
    request: {
      params: projectIdParamsSchema,
      body: {
        content: { 'application/json': { schema: addProjectMemberBodySchema } }
      }
    },
    responses: {
      201: {
        description: 'Project membership created',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectMembershipResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'get',
    path: '/projects/{id}/members',
    tags: ['Projects'],
    summary: 'List project members',
    request: { params: projectIdParamsSchema },
    responses: {
      200: {
        description: 'Project memberships',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(
              z.array(projectMembershipResponseSchema)
            )
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'patch',
    path: '/projects/{id}/members/{memberId}',
    tags: ['Projects'],
    summary: 'Update project member role',
    request: {
      params: projectMemberParamsSchema,
      body: {
        content: {
          'application/json': { schema: updateProjectMemberRoleBodySchema }
        }
      }
    },
    responses: {
      200: {
        description: 'Updated project membership',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectMembershipResponseSchema)
          }
        }
      }
    }
  });
  openApiRegistry.registerPath({
    method: 'delete',
    path: '/projects/{id}/members/{memberId}',
    tags: ['Projects'],
    summary: 'Remove member from project',
    request: { params: projectMemberParamsSchema },
    responses: {
      200: {
        description: 'Project membership deleted',
        content: {
          'application/json': {
            schema: apiSuccessResponseSchema(projectDeletedResponseSchema)
          }
        }
      }
    }
  });
}
