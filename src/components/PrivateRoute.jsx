import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
        <div className="border-4 w-16 h-16 rounded-full animate-spin">
            
        </div>
        </>
    }
    if(user && user?.uid ){
        return children;
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>

};

export default PrivateRoute;