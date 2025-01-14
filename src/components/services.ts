import { loginOnboarding } from "../utils/config";

export default {
  async LogIn(email: string, password: string) {
    // Prepare the payload
    const data = {
      emailAddress: email, // Match API's expected key name
      password,
    };

    // Make the POST request using loginOnboarding
    try {
      const response = await loginOnboarding.post(
        "/authentication/login",
        JSON.stringify(data) // Stringify the data before sending
      );

      // Return the API response
      return response;
    } catch (error) {
      // Handle errors
      console.error("Error in LogIn method:", error);
      throw error; // Re-throw error for further handling
    }
  },
};
