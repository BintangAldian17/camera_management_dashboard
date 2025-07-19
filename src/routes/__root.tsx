import * as React from "react";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type { UserData } from "@/types/user-type";
import { Toaster } from "react-hot-toast";
import NotFound from "@/components/templates/NotFound";

type UserContext = {
  isAdmin: boolean;
} & UserData;

type RouterContext = {
  queryClient: QueryClient;
  user: UserContext | null;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
      <Toaster />
    </React.Fragment>
  );
}
