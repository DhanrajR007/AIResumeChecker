import { useContext } from "react";
import { AuthContext } from "../auth.context";
import authApi from "../services/auth.api";
export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const handleLogin = async ({email, password}) => {
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
  const handleLogout =async () => {
    setLoading(true);
    try{
        await authApi.logout();
        setUser(null)
    }catch(err){
        console.error("Logout failed", err);
    }finally{
        setLoading(false);
    }
  };
  return { loading, user, handleLogin, handleRegister ,handleLogout};
};

export default useAuth;
