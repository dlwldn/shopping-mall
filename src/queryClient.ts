import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60
    }
  }
});