import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import authApi from "../services/auth.api";
export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const data = await authApi.login({ email, password });
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const data = await authApi.register({ username, email, password });
      setUser(data.user);
    } catch (err) {
      console.error("Register failed", err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, user, handleLogin, handleRegister };
};

export default useAuth;
