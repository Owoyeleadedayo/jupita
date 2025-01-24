import { axiosInstance } from "./axios";
import {
  BaseResponse,
  InitiateLoanPayload,
  VerifyTenantEmailPayload,
  UploadSelfiePayload,
  ApplyPersonalLoan,
  ApplyBusinessLoan,
  // UpdateBorrowerDataPayload,
} from "./types";

const initiateLoan = async (tenantId: string, payload: InitiateLoanPayload) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/initiate-loan`,
      payload
    )
  ).data;
};

const verifyTenantEmail = async (
  tenantId: string,
  payload: VerifyTenantEmailPayload
) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/verify-email`,
      payload
    )
  ).data;
};

const uploadSelfie = async (tenantId: string, payload: UploadSelfiePayload) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/upload-selfie`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
  ).data;
};

const applyBusinessLoan = async (
  tenantId: string,
  payload: ApplyBusinessLoan
) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/apply-loan`,
      payload
    )
  ).data;
};

const applyPersonalLoan = async (
  tenantId: string,
  payload: ApplyPersonalLoan
) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/apply-loan`,
      payload
    )
  ).data;
};

const updateBusinessLoan = async (
  tenantId: string,
  payload: Partial<ApplyBusinessLoan>
) => {
  return (
    await axiosInstance.put<BaseResponse>(
      `${tenantId}/loan/update-loan-data`,
      payload
    )
  ).data;
};

const updatePersonalLoan = async (
  tenantId: string,
  payload: Partial<ApplyPersonalLoan>
) => {
  return (
    await axiosInstance.put<BaseResponse>(
      `${tenantId}/loan/update-loan-data`,
      payload
    )
  ).data;
};

const updateBorrowerData = async (
  tenantId: string,
  // payload: UpdateBorrowerDataPayloan
) => {
  return (
    await axiosInstance.post<BaseResponse>(
      `${tenantId}/loan/update-borrower-data`,
      // payload
    )
  ).data;
};

export {
  initiateLoan,
  verifyTenantEmail,
  uploadSelfie,
  applyBusinessLoan,
  applyPersonalLoan,
  updateBorrowerData,
  updateBusinessLoan,
  updatePersonalLoan,
};
