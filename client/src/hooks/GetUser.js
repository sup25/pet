import { useState, useEffect } from "react";
import axios from "axios";

export const GetUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          console.log("Token:", token);
          const response = await axios.get("http://localhost:8000/user/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);

          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>{user ? user.username : "User not found"}</div>;
  }
};
