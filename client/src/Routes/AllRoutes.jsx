import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSurvey from "../Components/CreateSurvey";
import DisplaySurvey from "../Components/DisplaySurvey";
import Login from "../Components/Login";
import SignupEmail from "../Components/SignupEmail";
import SignupPassword from "../Components/SignupPassword";
import RequireEmail from "../Hoc/RequireEmail";
// import Login from './../Components/Login';
import Homepage from "./../Pages/Homepage";
// import SignupEmail from './../Components/SignupEmail';
// import SignupPassword from "../Components/SignupPassword";
import Dashboard from "../Pages/Dashboard";
import RequireAuth from "../Hoc/RequireAuth";
import AllSurverys from "../Components/AllSurverys";
import MySurveys from "../Components/MySurveys";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup/email" element={<SignupEmail />} />
				<Route
					path="/signup/password"
					element={
						<RequireEmail>
							<SignupPassword />
						</RequireEmail>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/survey"
					element={
						<RequireAuth>
							<CreateSurvey />
						</RequireAuth>
					}
				/>
				<Route
					path="/survey/:id"
					element={
						<RequireAuth>
							<DisplaySurvey />
						</RequireAuth>
					}
				/>
				<Route
					path="/allsurvey"
					element={
						<RequireAuth>
							<AllSurverys />
						</RequireAuth>
					}
				/>
				<Route
					path="/mysurvey"
					element={
						<RequireAuth>
							<MySurveys />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
};

export default AllRoutes;
