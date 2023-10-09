import { useState, useEffect } from "react";
import axios from "axios";

export const GetUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          console.log("Token:", token);
          const response = await axios.get("http://localhost:5000/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          console.log("user", user);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div>{user ? user.username : "User not found"}</div>;
  }
};
