import axios from "axios";
import { appConfig } from "../utils/AppConfig";

export const makePost = async (formData, author, setPosts, posts) => {
  try {
    const response = await axios.post(`${appConfig.apiUrl}Post`, {
      title: formData.petName,
      content: formData.petDescription,
      type: formData.petType,
      image: formData.petImage,
      author,
    });
    const createdPost = response.data;

    const postId = createdPost._id;

    setPosts([...posts, createdPost]);

    // Return the postId so you can use it for deleting the post if needed
    return postId;
  } catch (error) {
    console.log("error posting", error);
    // Handle errors as needed
    throw error;
  }
};
