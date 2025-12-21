import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useAppDispatch } from '../redux/hooks';
import { clearAuth, setAuth } from '../redux/slices/auth.slice';
import { AppDispatch } from '../redux/store';
import { authAPI } from '../services';
import { STORAGE_KEY } from '../types/constants';
import { AUTH_QUERY_KEY } from '../types/constants/queryKey';
import { storage } from '@app/core/config/storage';
import { ApiResponse, AuthData, RegisterPayload } from '@app/core/types/interface';

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authAPI.register(payload),

    onSuccess: (res: ApiResponse<AuthData>) => {
      storage.set(STORAGE_KEY.ACCESS_TOKEN, res.data.token);
      queryClient.setQueryData(AUTH_QUERY_KEY.PROFILE, res.data.user);
    },
  });
};

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (res) => {
      storage.set(STORAGE_KEY.ACCESS_TOKEN, res.data.token);
      dispatch(setAuth(res.data.user));
      queryClient.setQueryData(AUTH_QUERY_KEY.PROFILE, res.data.user);
    },
  });
};

export const useProfile = () => {
  const token = storage.get<string>(STORAGE_KEY.ACCESS_TOKEN);

  return useQuery({
    queryKey: AUTH_QUERY_KEY.PROFILE,
    queryFn: async () => {
      const res = await authAPI.getProfile();
      return res.data;
    },
    enabled: !!token,
  });
};

export const logout = (queryClient: QueryClient, dispatch: AppDispatch) => {
  storage.clear();
  dispatch(clearAuth());
  queryClient.clear();
};
