import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
interface IProps {
  isAdmin?: boolean;
}
export const ProtectedRoute: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  isAdmin = false,
}) => {
  const location = useLocation();
  const { pathname } = useLocation();

  const isAuth = localStorage.getItem("isAuth");
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (pathname === "/") {
    return <Navigate to="/signup" />;
  }
  return <>{children}</>;
};
