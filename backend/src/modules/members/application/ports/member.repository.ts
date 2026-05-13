import type { Member } from '@members/domain/member.entity.ts';

export type CreateMemberInput = Omit<Member, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateMemberInput = Partial<CreateMemberInput>;

export interface MemberRepository {
  create(input: CreateMemberInput): Promise<Member>;
  findAll(): Promise<Member[]>;
  findById(id: string): Promise<Member | null>;
  update(id: string, input: UpdateMemberInput): Promise<Member | null>;
  delete(id: string): Promise<boolean>;
}
