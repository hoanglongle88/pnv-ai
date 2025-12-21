import axiosInstance from '@app/core/config/axios';
import { API_URL } from '@app/core/types/constants';
import { RegisterPayload, LoginPayload, User } from '@app/core/types/interfaces';

export const getProfileApi = () => axiosInstance.get<{ data: User }>(API_URL.PROFILE);

export const loginApi = (LoginPayload: LoginPayload) =>
  axiosInstance.post(API_URL.LOGIN, LoginPayload);

export const registerApi = (RegisterPayload: RegisterPayload) =>
  axiosInstance.post(API_URL.REGISTER, RegisterPayload);
