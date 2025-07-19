import { createFileRoute, Outlet } from "@tanstack/react-router";
import SideBar from "@/components/organisms/SideBar";
import { getCurrentUser } from "@/lib/api/user-api";

export const Route = createFileRoute("/(main)/_mainLayout")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.fetchQuery({
      queryKey: ["user"],
      queryFn: getCurrentUser,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
    const isAdmin =
      user && user?.username?.trim().toLocaleLowerCase() === "admin";
    return { user: user ? { ...user, isAdmin } : null };
  },
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full flex">
      <SideBar />
      <Outlet />
    </div>
  );
}
