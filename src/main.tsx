import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spin } from 'antd';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { store } from './core/redux/store.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Suspense fallback={<Spin />}>
          <App />
        </Suspense>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
