export type CreateBusinessPayload = {
  business_name: string;
  business_email: string;
  phone_number: string;
  business_type: string;
  business_reg_number: string;
  password: string;
};

export type LoginBusinessPayload = {
  email: string;
  password: string;
};

export type ForgetPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  password: string;
  token: string;
};

export type VerifyEmailPayload = {
  tenant_id: string;
  token: string;
  email: string;
};

export type InitiateLoanPayload = {
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  home_address: string;
  bvn: string;
  nin: string;
  business_id: string;
  loan_type: string;
  lcga: string;
  state_of_residence: string;
};

export type UploadSelfiePayload = {
  job_done: boolean;
  job_successful: boolean;
  result_code: string;
  result_text: string;
  is_verified: boolean;
  liveness_score: number;
  similarity_score: number;
  reason: string;
  confidence: string;
  user_id: string;
  job_id: string;
  user_reference: string;
  selfie_url: string;
  matched_id_image_url: string;
  timestamp: string;
  borrower_id: number;
};

export type ApplyPersonalLoan = {
  borrower_id: number;
  business_id: string;
  employment_type: string;
  employer_name: string;
  company_sector: string;
  net_income: number;
  employment_start_date: string;
  designation: string;
  work_email: string;
  employer_address: string;
  state_of_residence: string;
  lcga: string;
};

export type ApplyBusinessLoan = {
  borrower_id: number;
  business_id: string;
  cac_number: string;
  tax_id: string;
  business_name: string;
  business_address: string;
  business_type: string;
  business_sector: string;
  business_start_date: string;
  lcga: string;
  state_of_residence: string;
};

export type VerifyTenantEmailPayload = {
  email: string;
  token: string;
  borrower_id: number;
  business_id: string;
};

export type BaseResponse = {
  token: string;
  status: string;
  status_code: number;
  message?: string;
  //   data: any;
};

export type UpdateBorrowerDataPayload = {
  borrower_id: number;
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  nin: string;
  home_address: string;
  state_of_residence: string;
  lcga: string;
};
