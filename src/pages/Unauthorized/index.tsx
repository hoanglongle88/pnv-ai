import { Link } from 'react-router-dom';

import { ROUTES } from '@app/core/types/constants';

export default function Unauthorized() {
  return (
    <div>
      <h1>403 - Unauthorized</h1>
      <p>Bạn không có quyền truy cập trang này.</p>
      <Link to={ROUTES.HOME}>Về trang chủ</Link>
    </div>
  );
}
