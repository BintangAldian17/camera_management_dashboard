import GraphCard from "@/components/molecules/GraphCard";
import { useSidebar } from "@/context/SidebarContext";
import { useGraphQuery } from "@/lib/api/graph-api";
import { cn } from "@/lib/utils";

export default function GroupGraphCard() {
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
      <GraphCard
        isLoading={cpusData.status === "pending"}
        data={cpusData.data}
        title="CPU Utilization"
      />
      <GraphCard
        isLoading={memoriesData.status === "pending"}
        data={memoriesData.data}
        title="Memory Utilization"
      />
      <GraphCard
        isLoading={storagesData.status === "pending"}
        data={storagesData.data}
        title="Storage Utilization"
      />
    </section>
  );
}
