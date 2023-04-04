import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import MainLayout from '../../components/layout/MainLayout';
import NotFoundPage from '../../pages/NotFoundPage';
import ProtectedRoute from '../../pages/ProtectedRoute';
import { AuthRouterData, MainRouterData } from './RouterList';

const Router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <AuthLayout />,
        children: AuthRouterData,
      },
      {
        element: (
          <ProtectedRoute redirectPath="login">
            <MainLayout />
          </ProtectedRoute>
        ),
        children: MainRouterData,
      },
    ],
  },
]);

export default Router;
