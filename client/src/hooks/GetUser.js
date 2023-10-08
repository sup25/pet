import { useState, useEffect } from "react";
import axios from "axios";

export const GetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          console.log("Token:", token);
          const response = await axios.get("http://localhost:5000/user/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchuser();
  }, []);

  return user;
};
