import { registerMembersDocs } from '@members/infrastructure/http/members.docs.ts';
import { registerProjectsDocs } from '@projects/infrastructure/http/projects.docs.ts';
import { registerEventsDocs } from '@events/infrastructure/http/events.docs.ts';

export function registerOpenApiDocs() {
  registerMembersDocs();
  registerProjectsDocs();
  registerEventsDocs();
}
