import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

const login = async ({email, password}) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
  }
};

const register = async ({username, email, password}) => {
  try {
    const response = await axiosInstance.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Register failed", error);
  }
};

const logout = async ()=>{
  try {
    const response = await axiosInstance.get("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout failed", error);
  }
}

export default {
  login,
  register,
  logout
};
