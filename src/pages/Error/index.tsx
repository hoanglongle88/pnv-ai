import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>500 - Something went wrong</h1>
      <p>Đã có lỗi xảy ra.</p>
    </div>
  );
}
