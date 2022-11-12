import React from "react";
import { Route, Routes } from 'react-router-dom';
// import Login from './../Components/Login';
import Homepage from './../Pages/Homepage';
// import SignupEmail from './../Components/SignupEmail';
// import SignupPassword from "../Components/SignupPassword";

const AllRoutes = () => {
	return <div>
		<Routes>
		
			<Route path="/" element={<Homepage/>}/>

		</Routes>
	</div>;
};

export default AllRoutes;
