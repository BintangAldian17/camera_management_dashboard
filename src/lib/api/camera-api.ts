import { useQuery } from "@tanstack/react-query";
import type { CameraData } from "../../types/camera-type";
import { authApi } from "../service/axios";

const getCamera = async () => {
  const token = window.localStorage.getItem("access_token");
  try {
    const { data } = await authApi.get<CameraData>("/camera", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useCameraQuery = () => {
  return useQuery<CameraData, Error>({
    queryKey: ["camera"],
    queryFn: getCamera,
  });
};
