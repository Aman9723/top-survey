import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSurvey from "../Components/CreateSurvey";
import DisplaySurvey from "../Components/DisplaySurvey";
import Login from "../Components/Login";
import SignupEmail from "../Components/SignupEmail";
import SignupPassword from "../Components/SignupPassword";
import RequireEmail from "../Hoc/RequireEmail";
import RequireEmail2 from "../Hoc/RequireEmail2";
import Homepage from "./../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";
import AfterAuth from "../Hoc/AfterAuth";
import AllSurverys from "../Components/AllSurverys";
import ForgotEmail from "../Components/ForgotEmail";
import ForgotPassword from "../Components/ForgotPassword";
import BeforeAuth from "../Hoc/BeforeAuth";
import MySurveys from "../Components/MySurveys";
import PlanAndPricing from "../Components/PlanAndPricing/PlanAndPricing";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<AfterAuth>
							<Homepage />
						</AfterAuth>
					}
				/>
				<Route path="/signup/email" element={<SignupEmail />} />
				<Route
					path="/signup/password"
					element={
						<AfterAuth>
							<RequireEmail>
								<SignupPassword />
							</RequireEmail>
						</AfterAuth>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<BeforeAuth>
							<Dashboard />
						</BeforeAuth>
					}
				/>
				<Route
					path="/login"
					element={
						<AfterAuth>
							<Login />
						</AfterAuth>
					}
				/>
				<Route
					path="/survey"
					element={
						<BeforeAuth>
							<CreateSurvey />
						</BeforeAuth>
					}
				/>
				<Route
					path="/survey/:id"
					element={
						<BeforeAuth>
							<DisplaySurvey />
						</BeforeAuth>
					}
				/>
				<Route
					path="/plans&pricing"
					element={
						<BeforeAuth>
							<PlanAndPricing />
						</BeforeAuth>
					}
				/>
				<Route
					path="/allsurvey"
					element={
						<BeforeAuth>
							<AllSurverys />
						</BeforeAuth>
					}
				/>
				<Route
					path="/mysurvey"
					element={
						<BeforeAuth>
							<MySurveys />
						</BeforeAuth>
					}
				/>
				<Route
					path="/forgot/sendOtp"
					element={
						<AfterAuth>
							<ForgotEmail />
						</AfterAuth>
					}
				/>
				<Route
					path="/forgot/changePassword"
					element={
						<AfterAuth>
							<RequireEmail2>
								<ForgotPassword />
							</RequireEmail2>
						</AfterAuth>
					}
				/>
			</Routes>
		</div>
	);
};

export default AllRoutes;
