import axios from "axios";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/register",
      formData
    );
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
