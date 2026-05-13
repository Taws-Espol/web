export enum SocialPlatform {
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
  Other = 'other'
}

export type SocialLink = {
  id: string;
  eventId: string;
  platform: SocialPlatform;
  url: string;
  label: string | null;
  createdAt: Date;
  updatedAt: Date;
};
