import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { CheckToken } from "../token/CheckToken";

export default function PublicRoute({ children }) {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Success') return <Navigate to="/lectures" state={{from: location}}/>

  return children
}