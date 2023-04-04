import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  children?: React.ReactNode;
  redirectPath: string;
}

export default function ProtectedRoute({ children, redirectPath }: IProps) {
  // const isAuth = !!localStorage.getItem('adminToken');
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
}
