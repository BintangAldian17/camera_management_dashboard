import GraphCard from "../molecules/GraphCard";
import { useCameraQuery } from "../../lib/api/camera-api";
import CameraVideoOffIcon from "../atoms/icons/CameraVideoOffIcon";
import CameraVideoIcon from "../atoms/icons/CameraVideoIcon";

export default function GroupGraphCard() {
  const { data, status } = useCameraQuery();
  const isLoading = status === "pending";

  return (
    <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-[15px] w-full">
      <GraphCard
        className="md:col-span-2 xl:col-span-1"
        icon={<CameraVideoIcon />}
        total={data?.total_cameras ?? 0}
        desc="Camera Total"
        accent="yellow"
        isLoading={isLoading}
      />

      <GraphCard
        icon={<CameraVideoIcon />}
        total={data?.active_cameras.length ?? 0}
        desc="Active Camera"
        accent="green"
        isLoading={isLoading}
      />

      <GraphCard
        icon={<CameraVideoOffIcon />}
        total={data?.inactive_cameras.length ?? 0}
        desc="Inactive Camera"
        accent="red"
        isLoading={isLoading}
      />
    </div>
  );
}
