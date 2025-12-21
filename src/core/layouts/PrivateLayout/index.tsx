import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@app/core/redux/hooks';
import { ROUTES } from '@app/core/types/constants';

const PrivateLayout = () => {
  const isAuth = useAppSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};

export default PrivateLayout;
