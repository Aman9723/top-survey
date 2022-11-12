import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './../Components/Login';
import Homepage from './../Pages/Homepage';
import SignupEmail from './../Components/SignupEmail';
import SignupPassword from "../Components/SignupPassword";

const AllRoutes = () => {
	return <div>
		<Routes>
			<Route path= "/login" element={<Login/>}/>
			<Route path="/" element={<Homepage/>}/>
                <Route path="/signup/email" element={<SignupEmail />} />
                <Route path="/signup/password" element={<SignupPassword  />} />
		</Routes>
	</div>;
};

export default AllRoutes;
