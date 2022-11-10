import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireEmail = ({ children }) => {
    const { isEmailValid } = useSelector((store) => store.signup);

    if (isEmailValid) return children;
    else return <Navigate to="/signup/email" />;
};

export default RequireEmail;
