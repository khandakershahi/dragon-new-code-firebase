import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user);

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {

        return children;
    }

    return <Navigate to='/auth/login'></Navigate>

    // if-> user is availble return children
    //
    // navigate --> login
};

export default PrivateRoute;