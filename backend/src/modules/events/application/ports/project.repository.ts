export interface ProjectRepository {
  existsProjectById(id: string): Promise<boolean>;
}
