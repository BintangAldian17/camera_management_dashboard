import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import GreetingCard from "@/components/molecules/GreetingCard";
import GroupGraphCard from "@/components/organisms/GroupCameraCard";
import GroupChartCard from "@/components/organisms/GroupGraphCard";
import DashboardLayout from "@/components/templates/DashboardLayout";

export const Route = createFileRoute("/(main)/_mainLayout/(dashboard)/")({
  component: RouteComponent,
});

function RouteComponent() {
  const userData = useRouteContext({
    from: "/(main)/_mainLayout",
    select: (context) => context.user,
  });
  return (
    <DashboardLayout>
      <GreetingCard />
      <GroupGraphCard />
      {userData?.isAdmin && <GroupChartCard />}
    </DashboardLayout>
  );
}
