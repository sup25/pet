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

    setPosts([...posts, createdPost]);
  } catch (error) {
    console.log("error posting", error);
  }
};
