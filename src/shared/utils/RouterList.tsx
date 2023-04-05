import AccountPage from '../../pages/AccountPage';
import AdSetPage from '../../pages/AdSetPage';
import LogInPage from '../../pages/LogInPage';
import MainPage from '../../pages/MainPage';
import ProductPostPage from '../../pages/ProductPostPage';
import ProductSetPage from '../../pages/ProductSetPage';
import ReportPage from '../../pages/ReportPage';
import ServicePage from '../../pages/ServicePage';
import SignUpPage from '../../pages/SignUpPage';

export const AuthRouterData = [
  {
    path: 'login',
    element: <LogInPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
  {
    path: 'find_account',
    element: <AccountPage />,
  },
];

export const MainRouterData = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'setProd',
    element: <ProductSetPage />,
  },
  {
    path: 'postProd',
    element: <ProductPostPage />,
  },
  {
    path: 'shipping_service',
    element: <ServicePage />,
  },
  {
    path: 'setAd',
    element: <AdSetPage />,
  },
  {
    path: 'ad_report',
    element: <ReportPage />,
  },
];
