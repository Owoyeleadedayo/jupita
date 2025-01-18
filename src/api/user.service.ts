/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "./axios";
import {
  BaseResponse,
  CreateBusinessPayload,
  LoginBusinessPayload,
  VerifyEmailPayload,
  ForgetPasswordPayload,
  ResetPasswordPayload,
} from "./types";

const fetchUserInfo = async () => {
  return (await axiosInstance.get<any>("/me")).data;
};

const register = async (payload: CreateBusinessPayload) => {
  return (await axiosInstance.post<BaseResponse>("register_business", payload))
    .data;
};

const login = async (payload: LoginBusinessPayload) => {
  return (await axiosInstance.post<BaseResponse>("login", payload)).data;
};

const verifyEmail = async (payload: VerifyEmailPayload) => {
  return (await axiosInstance.post<BaseResponse>("verify_email", payload)).data;
};

const forgetPassword = async (payload: ForgetPasswordPayload) => {
  return (await axiosInstance.post<BaseResponse>("forgot_password", payload))
    .data;
};

const resetPassword = async (payload: ResetPasswordPayload) => {
  return (await axiosInstance.post<BaseResponse>("reset_password", payload))
    .data;
};

export {
  fetchUserInfo,
  register,
  login,
  verifyEmail,
  forgetPassword,
  resetPassword,
};
