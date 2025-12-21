import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeStorageData, setStorageData } from '../config/storage';
import { login, logout, setAuth } from '../redux/features/auth/authSlice';
import { getProfileApi, loginApi, registerApi } from '@app/core/services';
import { ACCESS_TOKEN, AUTH_QUERY_KEY, ROUTES, USER_PROFILE } from '@app/core/types/constants';
import { RegisterPayload, LoginPayload, User } from '@app/core/types/interfaces';

export const USER_QUERY_KEY = {
  PROFILE: ['user-profile'],
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation(
    async (registerUserDto: RegisterPayload) => {
      const { data } = await registerApi(registerUserDto);
      return data;
    },
    {
      onSuccess: () => {
        navigate('/login');
      },
      onError({ response }) {
        console.log(response.data.message);
      },
    },
  );
};

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatchAuth = useDispatch();

  return useMutation(
    async (LoginPayload: LoginPayload) => {
      const { data } = await loginApi(LoginPayload);
      return data;
    },
    {
      onSuccess: ({ data }) => {
        dispatchAuth(login());
        dispatchAuth(
          setAuth({
            user: { name: data?.user.username },
            permissions: [],
          }),
        );
        setStorageData(ACCESS_TOKEN, data?.token);
        setStorageData(USER_PROFILE, data.user);

        navigate('/');
      },
      onError({ response }) {
        console.log(response.data.message);
      },
    },
  );
};

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatchAuth = useDispatch();

  const handleLogout = () => {
    removeStorageData(ACCESS_TOKEN);
    removeStorageData(USER_PROFILE);

    dispatchAuth(logout());

    navigate(ROUTES.LOGIN);

    window.location.reload();
  };

  return { handleLogout };
};

export const useGetProfile = (isAuth = true) => {
  const dispatch = useDispatch();

  return useQuery<User>(
    [AUTH_QUERY_KEY.PROFILE],
    async () => {
      const { data } = await getProfileApi();
      return data.data;
    },
    {
      onSuccess(data) {
        dispatch(setAuth(data));
      },
      enabled: isAuth,
    },
  );
};
