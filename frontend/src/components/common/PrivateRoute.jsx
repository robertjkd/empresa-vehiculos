import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useSelector((state) => state.auth);

  // Si no hay usuario, redirige a login
  if (!user) return <Navigate to="/login" replace />;

  // Si hay roles requeridos y el usuario no los tiene, redirige
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
