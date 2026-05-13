export interface MemberRepository {
  existsMemberById(id: string): Promise<boolean>;
}
