import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, credentials, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};
