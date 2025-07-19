import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type { UserData } from "../types/user-type";

type UserContext = {
  isAdmin: boolean;
} & UserData;

type RouterContext = {
  queryClient: QueryClient;
  user: UserContext | null;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
