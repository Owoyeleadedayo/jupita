// user.query.ts

import { useMutation } from "@tanstack/react-query";
import { LoginBusinessPayload, BaseResponse } from "./types"; // Adjust the path as necessary
import { axiosInstance } from "./axios";

// Define the login API function
export const login = async (
  payload: LoginBusinessPayload
): Promise<BaseResponse> => {
  const response = await axiosInstance.post<BaseResponse>("/login", payload);
  return response.data;
};

// Create a custom hook for login using React Query
export const useLogin = () => 
  // return useMutation<BaseResponse, Error, LoginBusinessPayload>(login);
  useMutation({
    mutationFn: (login),
  });

