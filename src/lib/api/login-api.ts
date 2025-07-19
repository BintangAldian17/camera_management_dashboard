import { useMutation } from "@tanstack/react-query";
import type { LoginPayload, LoginResponse } from "../../types/login-type";
import { publicApi } from "../service/axios";

const loginApi = async (payload: LoginPayload) => {
  try {
    const { data } = await publicApi.post<LoginResponse>("/login", payload);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useLoginMutation = () => {
  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: (payload) => loginApi(payload),
  });
};
