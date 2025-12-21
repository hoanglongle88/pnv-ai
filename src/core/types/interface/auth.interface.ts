import type { UserRole } from '../constants';

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  username: string;
  fullName: string;
}
