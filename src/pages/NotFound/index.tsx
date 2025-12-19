import { Link } from 'react-router-dom';

import { ROUTES } from '@app/core/types/constants';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Trang không tồn tại.</p>
      <Link to={ROUTES.HOME}>Về trang chủ</Link>
    </div>
  );
}
