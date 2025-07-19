import { redirect } from "@tanstack/react-router";

type ApiError = {
  response?: {
    status: number;
  };
};

const isApiError = (error: unknown): error is ApiError => {
  return typeof error === "object" && error !== null && "response" in error;
};

// Handle error
export const handleApiError = (error: unknown) => {
  if (isApiError(error)) {
    if (error.response?.status === 401) {
      throw redirect({ to: "/login" });
    }
  }
  throw error;
};
