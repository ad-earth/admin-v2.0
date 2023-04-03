import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
// import { routerData } from './RouteList';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* {routerData.map(router => {
        if (router.withAuth) {
          return (
            <Route
              key={router.id}
              path={router.path}
              element={
                <ProtectedRoute redirectPath={router.redirectPath}>
                  {router.element}
                </ProtectedRoute>
              }
            > */}
    </Route>
  )
);

export default Router;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
