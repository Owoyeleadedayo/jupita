import { useMutation } from "@tanstack/react-query";
import { LoginBusinessPayload, BaseResponse } from "./types"; 
import { axiosInstance } from "./axios";

export const login = async (
  payload: LoginBusinessPayload
): Promise<BaseResponse> => {
  const response = await axiosInstance.post<BaseResponse>("/login", payload);
  return response.data;
};

export const useLogin = () => 
  useMutation({
    mutationFn: (login),
  });

