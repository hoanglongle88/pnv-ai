import { lazy } from 'react';

import { BaseLayout } from '../layouts';
import { ROUTES } from '../types/constants';
import { Dashboard, PostList, UserProfile } from '@app/pages';

const PrivateLayout = lazy(() => import('@app/core/layouts/PrivateLayout'));
const NotFound = lazy(() => import('@app/pages/Exception/NotFound'));
const Forbidden = lazy(() => import('@app/pages/Exception/Forbidden'));

const privateRoutes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: ROUTES.FORBIDDEN,
        element: <Forbidden />,
      },
      {
        element: <BaseLayout />,
        children: [
          {
            path: ROUTES.POST_MANAGEMENT,
            element: <PostList />,
          },
          {
            path: ROUTES.USER_PROFILE,
            element: <UserProfile />,
          },
          {
            path: ROUTES.ADMIN_DASHBOARD,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];

export default privateRoutes;
