import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import TopBar from "../../../../components/molecules/TopBar";
import GreetingCard from "../../../../components/molecules/GreetingCard";
import GroupGraphCard from "../../../../components/organisms/GroupGraphCard";
import GroupChartCard from "../../../../components/organisms/GroupChartCard";
import Footer from "../../../../components/atoms/Footer";

export const Route = createFileRoute("/(main)/_mainLayout/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const userData = useRouteContext({
    from: "/(main)/_mainLayout",
    select: (context) => context.user,
  });
  return (
    <main className="h-screen w-full bg-background p-[25px] overflow-auto flex flex-col">
      <TopBar />
      <div className="flex flex-col gap-[15px] w-full pb-5 mb">
        <GreetingCard />
        <GroupGraphCard />
        {userData.isAdmin && <GroupChartCard />}
      </div>
      <div className="mt-auto mb-[35px]">
        <Footer />
      </div>
    </main>
  );
}
