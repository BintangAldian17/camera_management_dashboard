import ChartCard from "../molecules/ChartCard";
import { useGraphQuery } from "../../lib/api/graph-api";
import { useSidebar } from "../../context/SidebarContext";
import { cn } from "../../lib/utils";

export default function GroupChartCard() {
  const { isOpen } = useSidebar();
  const cpusData = useGraphQuery("cpu");
  const memoriesData = useGraphQuery("memory");
  const storagesData = useGraphQuery("storage");
  return (
    <section
      className={cn(
        "grid gap-[15px] grid-cols-1 xl:grid-cols-2",
        isOpen ? "xl:grid-cols-2" : "2xl:grid-cols-3"
      )}
    >
      <ChartCard
        isLoading={cpusData.status === "pending"}
        data={cpusData.data}
        title="CPU Utilization"
      />
      <ChartCard
        isLoading={memoriesData.status === "pending"}
        data={memoriesData.data}
        title="Memory Utilization"
      />
      <ChartCard
        isLoading={storagesData.status === "pending"}
        data={storagesData.data}
        title="Storage Utilization"
      />
    </section>
  );
}
