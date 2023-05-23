import axios from "axios";
import { useState, useEffect } from "react";

export const handleSubmit = async (email, password, setError) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    if (response.data.token) {
      const token = response.data.token;
      localStorage.setItem("token", token);

      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
    setError("Login failed");
  }
};

export const useFetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:5000/user/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return user;
};
