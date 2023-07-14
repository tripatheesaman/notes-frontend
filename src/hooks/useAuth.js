import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";
  if (token) {
    const decodedToken = jwtDecode(token);
    const { username, role } = decodedToken.UserInfo;
    isManager = role === "Manager";
    isAdmin = role === "Admin";
    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";
    return { username, role, status, isAdmin, isManager };
  }
  return { username: "", role: "", isManager, isAdmin, status };
};

export default useAuth;
