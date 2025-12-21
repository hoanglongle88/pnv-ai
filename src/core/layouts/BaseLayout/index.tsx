import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '@app/core/components/layouts';

const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
