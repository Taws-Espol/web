import { eq } from 'drizzle-orm';
import { db } from '@shared/infrastructure/db/drizzle.ts';
import type {
  CreateMemberInput,
  MemberRepository,
  UpdateMemberInput
} from '@members/application/ports/member.repository.ts';
import type { Member } from '@members/domain/member.entity.ts';
import { membersTable } from '@members/infrastructure/persistence/member.schema.ts';

export class MemberDrizzleRepository implements MemberRepository {
  async create(input: CreateMemberInput): Promise<Member> {
    const [member] = await db.insert(membersTable).values(input).returning();
    return member as Member;
  }

  async findAll(): Promise<Member[]> {
    return await db.select().from(membersTable) as Member[];
  }

  async findById(id: string): Promise<Member | null> {
    const [member] = await db.select().from(membersTable).where(
      eq(membersTable.id, id)
    );
    return (member as Member | undefined) ?? null;
  }

  async update(id: string, input: UpdateMemberInput): Promise<Member | null> {
    const [member] = await db.update(membersTable).set({
      ...input,
      updatedAt: new Date()
    }).where(eq(membersTable.id, id)).returning();
    return (member as Member | undefined) ?? null;
  }

  async delete(id: string): Promise<boolean> {
    const rows = await db.delete(membersTable).where(eq(membersTable.id, id))
      .returning({ id: membersTable.id });
    return rows.length > 0;
  }
}
