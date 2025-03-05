import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const UnauthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UnauthenticatedRoute;