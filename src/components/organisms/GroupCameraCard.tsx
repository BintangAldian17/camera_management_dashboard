import { useCameraQuery } from "@/lib/api/camera-api";
import CameraCard from "@/components/molecules/CameraCard";
import CameraVideoIcon from "@/components/atoms/icons/CameraVideoIcon";
import CameraVideoOffIcon from "@/components/atoms/icons/CameraVideoOffIcon";

export default function GroupCameraCard() {
  const { data, status } = useCameraQuery();
  const isLoading = status === "pending";

  return (
    <section className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-[15px] w-full">
      <CameraCard
        className="md:col-span-2 xl:col-span-1"
        icon={<CameraVideoIcon />}
        total={data?.total_cameras ?? 0}
        desc="Camera Total"
        accent="yellow"
        isLoading={isLoading}
      />

      <CameraCard
        icon={<CameraVideoIcon />}
        total={data?.active_cameras.length ?? 0}
        desc="Active Camera"
        accent="green"
        isLoading={isLoading}
      />

      <CameraCard
        icon={<CameraVideoOffIcon />}
        total={data?.inactive_cameras.length ?? 0}
        desc="Inactive Camera"
        accent="red"
        isLoading={isLoading}
      />
    </section>
  );
}
