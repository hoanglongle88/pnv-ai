import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Navbar } from '@app/core/components/layouts';
import { useGetProfile } from '@app/core/hooks';

const AuthLayout = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const { isLoading } = useGetProfile(isAuth);
  if (isAuth && isLoading) {
    return <Spin className='top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2' />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
