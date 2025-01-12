export interface Session {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthError {
  message: string;
  status: number;
}