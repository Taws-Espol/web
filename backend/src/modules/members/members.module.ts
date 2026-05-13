import { CreateMemberUseCase } from '@members/application/usecases/create-member.usecase.ts';
import { ListMembersUseCase } from '@members/application/usecases/list-members.usecase.ts';
import { GetMemberByIdUseCase } from '@members/application/usecases/get-member-by-id.usecase.ts';
import { UpdateMemberUseCase } from '@members/application/usecases/update-member.usecase.ts';
import { DeleteMemberUseCase } from '@members/application/usecases/delete-member.usecase.ts';
import { MembersController } from '@members/infrastructure/http/members.controller.ts';
import { createMembersRoutes } from '@members/infrastructure/http/members.routes.ts';
import { MemberDrizzleRepository } from '@members/infrastructure/persistence/member.drizzle.repository.ts';

export function createMembersModule() {
  const repository = new MemberDrizzleRepository();
  const controller = new MembersController(
    new CreateMemberUseCase(repository),
    new ListMembersUseCase(repository),
    new GetMemberByIdUseCase(repository),
    new UpdateMemberUseCase(repository),
    new DeleteMemberUseCase(repository)
  );
  return createMembersRoutes(controller);
}
