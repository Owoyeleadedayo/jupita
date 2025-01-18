import Cookies from "js-cookie";
import services from "./services";
import { LoginBusinessPayload } from "../api/types";
import { AxiosError } from "axios";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >
) => {
  const { name, value } = e.target;
  setFormData((prevState) => {
    const updatedFormData = { ...prevState, [name]: value };
    setIsFormValid(
      updatedFormData.email.length > 0 &&
        updatedFormData.password.length > 0
    );
    return updatedFormData;
  });
};


export const handleLogin = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  formData: { emailAddress: string; password: string },
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  navigate: (path: string) => void
) => {
  setIsLoading(true);

  try {
    console.log("Attempting login with:", formData);

    const response = await services.LogIn(
      formData.emailAddress,
      formData.password
    );

    console.log("Full API response:", response);

    if (response.status === 200) {
      const responseData: LoginBusinessPayload = response.data.data;

      console.log("responseData:", responseData);

      // Set login state in cookies
      Cookies.set("loggedIn", "true");

      console.log("Cookies.set loggedIn:", Cookies.get("loggedIn"));

      // Navigate to dashboard
      console.log("Navigating to dashboard");
      navigate("/dashboard");
    } else {
      console.error("Unexpected status:", response.status);
      throw new Error("Unexpected response status");
    }
  } catch (error: unknown) {
    setIsLoading(false);

    if (error instanceof AxiosError) {
      console.error("API Error response:", error.response?.data);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      setErrorMessage(errorMessage);
    } else if (error instanceof Error) {
      console.error("General error:", error.message);
      setErrorMessage(error.message);
    } else {
      console.error("Unknown error:", error);
      setErrorMessage("An unknown error occurred.");
    }
  }
};




