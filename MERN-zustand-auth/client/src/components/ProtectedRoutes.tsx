import { Navigate, Outlet } from 'react-router';

interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
}

export const ProtectedRoutes = ({ isAllowed, children }: Props) => {
  if (!isAllowed) {
    return <Navigate to={'login'} />;
  }

  return children ? <>children</> : <Outlet />;
};
