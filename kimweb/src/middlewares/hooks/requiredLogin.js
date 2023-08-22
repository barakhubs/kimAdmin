import { useLocation, Navigate, Outlet  } from 'react-router-dom';

import useAuth from './useAuth';

const RequiredAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return ( 
        auth?.accesstoken ? <Outlet /> : <Navigate to = "/" state={{ from: location }} replace />
     );
}
 
export default RequiredAuth;