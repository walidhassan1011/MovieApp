import react from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  let { user } = useUserAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
