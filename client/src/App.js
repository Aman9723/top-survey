import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import SignupEmail from "./Components/SignupEmail";
import SignupPassword from "./Components/SignupPassword";
import Dashboard from "./Pages/Dashboard";
import RequireEmail from "./Hoc/RequireEmail";
import CreateSurvey from "./Components/CreateSurvey";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/signup/email" element={<SignupEmail />} />

				<Route path="/signup/password" element={<SignupPassword />} />

				<Route
					path="/signup/password"
					element={
						<RequireEmail>
							<SignupPassword />
						</RequireEmail>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* <Dashboard /> */}
			<CreateSurvey />
		</div>
	);
}

export default App;
