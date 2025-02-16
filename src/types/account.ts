export interface IAccountType {
  id: string;
  publicId: string;
  email: string;
  username: string;               
  status: string;
  authProvider: string;
  role: string;

  phoneNumber?: string;
  nickname?: string;
  fullname?: string;
  avatarUrl?: string
  coverPhotoUrl?: string

  country?: string
  state?: string
  city?: string
  address?: string
  postalCode?: string
  timezone?: string

  loginAttemptsCount?: number;
  lockExpiresAt: string;

  createdAt?: string;
  updatedAt?: string;
}