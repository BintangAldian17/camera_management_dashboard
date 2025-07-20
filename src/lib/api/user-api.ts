import { useQuery } from "@tanstack/react-query";
import type { UserData } from "../../types/user-type";
import { authApi } from "../services/axios";

export const getCurrentUser = async () => {
  const token = window.localStorage.getItem("access_token");
  try {
    const { data } = await authApi.get<UserData>("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useUserQuery = () => {
  return useQuery<UserData, Error>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
};
