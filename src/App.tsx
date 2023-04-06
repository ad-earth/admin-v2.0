import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { queryClient } from './shared/utils/queryClient';
import Router from './shared/utils/Router';
import './shared/styles/index.scss';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Toaster />
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
