import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const BeforeAuth = ({ children }) => {
    const { token } = useSelector((store) => store.login);

    if (!token) return <Navigate to="/" />;
    else return children;
};

export default BeforeAuth;
