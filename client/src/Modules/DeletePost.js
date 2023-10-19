import axios from "axios";
import { appConfig } from "../utils/AppConfig";

export const deletePost = async (token, postId) => {
  const deleteUrl = `${appConfig.apiUrl}deletePost/${postId}`;

  try {
    const response = await axios.delete(deleteUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
