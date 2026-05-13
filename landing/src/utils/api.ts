export interface ApiEnvelope<T> {
  data: T | null;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
    requestId?: string;
  } | null;
}

export interface ApiProject {
  id: string;
  name: string;
  websiteUrl: string;
  githubUrl: string;
  imageUrl: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiMember {
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
  clubPosition: 'president' | 'vicePresident' | 'alternateBoard' | 'member';
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  department: 'tawsLabs' | 'tawsResearchTrack' | 'tawsIncubator' | 'socialMedia';
  createdAt: string;
  updatedAt: string;
}

export interface ProjectViewModel {
  id: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  url: string;
  github?: string;
  githubStars?: string;
}

export interface MemberViewModel {
  id: string;
  name: string;
  role: string;
  description: string;
  group: 'current' | 'alumni';
  website: string;
  github: string;
}

function getApiBaseUrl(): string {
  const url = import.meta.env.API_BASE_URL?.trim();
  if (!url) {
    throw new Error(
      '[API] Missing API_BASE_URL. Set it in your environment before running astro build/dev.',
    );
  }
  return url.replace(/\/$/, '');
}

async function fetchApi<T>(path: string): Promise<T> {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${path}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`[API] ${path} failed with HTTP ${response.status}`);
  }

  const payload = (await response.json()) as ApiEnvelope<T>;
  if (payload.error) {
    throw new Error(`[API] ${path} returned ${payload.error.code}: ${payload.error.message}`);
  }
  if (payload.data == null) {
    throw new Error(`[API] ${path} returned null data`);
  }

  return payload.data;
}

export async function getProjects(): Promise<ApiProject[]> {
  return fetchApi<ApiProject[]>('/projects');
}

export async function getMembers(): Promise<ApiMember[]> {
  return fetchApi<ApiMember[]>('/members');
}

function extractGithubRepoPath(githubUrl: string): string | undefined {
  try {
    const parsed = new URL(githubUrl);
    if (parsed.hostname !== 'github.com') return undefined;
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return undefined;
    return `${parts[0]}/${parts[1]}`;
  } catch {
    return undefined;
  }
}

export function toProjectViewModel(project: ApiProject): ProjectViewModel {
  const githubRepo = extractGithubRepoPath(project.githubUrl);
  return {
    id: project.id,
    title: project.name,
    description: project.description,
    img: project.imageUrl,
    imgAlt: project.name,
    url: project.websiteUrl,
    github: githubRepo,
    githubStars: githubRepo,
  };
}

const clubPositionLabel: Record<ApiMember['clubPosition'], string> = {
  president: 'Presidente',
  vicePresident: 'Vicepresidente',
  alternateBoard: 'Vocal alterno',
  member: 'Miembro',
};

const departmentLabel: Record<ApiMember['department'], string> = {
  tawsLabs: 'TAWS Labs',
  tawsResearchTrack: 'TAWS Research Track',
  tawsIncubator: 'TAWS Incubator',
  socialMedia: 'Social Media',
};

export function toMemberViewModel(member: ApiMember): MemberViewModel {
  return {
    id: member.id,
    name: `${member.firstName} ${member.lastName}`,
    role: clubPositionLabel[member.clubPosition] ?? member.clubPosition,
    // role: "Miembro",
    description: `${member.faculty} · ${member.degree} · ${departmentLabel[member.department] ?? member.department}`,
    // description: "desc",
    group: 'current',
    website: member.linkedinUrl,
    github: member.githubUsername,
  };
}
