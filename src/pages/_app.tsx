import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { trpc } from '../utils/trpc';
import type { AppProps } from "next/app";

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <trpc.Provider
      client={trpc.createClient({
        links: [httpBatchLink({ url: '/api/trpc' })],
      })}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default MyApp;
