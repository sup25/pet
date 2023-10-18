import { useState, useEffect } from "react";
import axios from "axios";
import { appConfig } from "../utils/AppConfig";

export const GetPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          console.log("Token:", token);
          const response = await axios.get(`${appConfig.apiUrl}Post`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPosts(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <h2>{post.title}</h2>
                <h2>{post.type}</h2>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          "No posts to show"
        )}
      </div>
    );
  }
};
