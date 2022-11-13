import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AfterAuth = ({ children }) => {
    const { token } = useSelector((store) => store.login);

    if (token) return <Navigate to="/dashboard" />;
    else return children;
};

export default AfterAuth;
