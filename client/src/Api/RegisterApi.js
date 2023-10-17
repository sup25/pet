import axios from "axios";
import { appConfig } from "../utils/AppConfig";
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${appConfig.apiUrl}register`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred during registration");
    }
  }
};
