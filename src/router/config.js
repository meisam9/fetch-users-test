import { Navigate} from 'react-router-dom'

export function PublicRoute({ children, isAuthenticated}) {
  return !isAuthenticated  ? children : <Navigate to="/users"/> ;
};


export function PrivateRoute({ children, isAuthenticated}) {
    return isAuthenticated ? children : <Navigate to="/"/>
  }
