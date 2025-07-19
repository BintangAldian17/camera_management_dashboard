import { useQuery } from "@tanstack/react-query";
import type { GraphData } from "../../types/graph-type";
import { authApi } from "../service/axios";

type GraphPath = "cpu" | "memory" | "storage";

const getGraph = async (path: GraphPath) => {
  const token = window.localStorage.getItem("access_token");
  try {
    const { data } = await authApi.get<GraphData>(`graph/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useGraphQuery = (path: GraphPath) => {
  return useQuery<GraphData, Error>({
    queryKey: ["graph", path],
    queryFn: () => getGraph(path),
  });
};
