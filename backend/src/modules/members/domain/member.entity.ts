import type { ClubPosition } from '@members/domain/club-position.ts';
import type { Department } from '@members/domain/department.ts';

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  enrollmentNumber: string;
  address: string;
  entryPeriod: string;
  faculty: string;
  degree: string;
  clubPosition: ClubPosition;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  department: Department;
  createdAt: Date;
  updatedAt: Date;
};
