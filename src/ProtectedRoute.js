import react from "react";
import { useHistory } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  let history = useHistory();
  let { user } = useUserAuth();
  if (!user) {
    history.push("/");
  }
  return children;
};

export default ProtectedRoute;
