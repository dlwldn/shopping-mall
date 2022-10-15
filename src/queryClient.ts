import { QueryClient } from 'react-query';

export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
    return client
  }
})()