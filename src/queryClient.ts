import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime:,
      // gcTime:,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default queryClient;
