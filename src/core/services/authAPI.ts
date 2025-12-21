import { API_URL } from '../types/constants';
import axiosInstance from '@app/core/config/axios';
import {
  AuthData,
  LoginPayload,
  RegisterPayload,
  User,
  type ApiResponse,
} from '@app/core/types/interface';

export const authAPI = {
  register(payload: RegisterPayload): Promise<ApiResponse<AuthData>> {
    return axiosInstance.post(API_URL.REGISTER, payload);
  },

  login(payload: LoginPayload): Promise<ApiResponse<AuthData>> {
    return axiosInstance.post(API_URL.LOGIN, payload);
  },

  getProfile(): Promise<ApiResponse<User>> {
    return axiosInstance.get(API_URL.PROFILE);
  },
};
