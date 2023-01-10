import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRotue = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(user){
        return children;
    }
    if(loading){
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='w-16 h-1 border-4 border-dashed nimate-spin border-red-800'></div>
            </div>
        </>
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRotue;