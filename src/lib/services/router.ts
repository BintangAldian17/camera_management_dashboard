import GlobalError from "@/components/molecules/GlobalError";
import { routeTree } from "@/routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      gcTime: 10 * 60 * 1000,
      retry: 1,
    },
  },
});

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    user: null,
  },
  defaultErrorComponent: GlobalError,
  notFoundMode: "root",
});
