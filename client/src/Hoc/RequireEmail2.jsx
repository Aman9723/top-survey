import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireEmail2 = ({ children }) => {
    const { isEmailValid } = useSelector((store) => store.forgot);

    if (isEmailValid) return children;
    else return <Navigate to="/forgot/sendOtp" />;
};

export default RequireEmail2;
