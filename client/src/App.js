import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignupEmail from './Components/SignupEmail';
import SignupPassword from './Components/SignupPassword';
<<<<<<< HEAD
import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';
=======
// import Dashboard  from "./Pages/Dashboard"
import RequireEmail from './Hoc/RequireEmail';
import CreateSurvey from "./Components/CreateSurvey";
>>>>>>> 1607eb8460db0dc14ce9390839a5ceee80d408eb

function App() {
    return (
        <div className="App">
            {/* hello */}

            {/* <Homepage/> */}
            {/* <AllRoutes/> */}
            <Routes>
<<<<<<< HEAD
               

=======
                <Route path="/signup/email" element={<SignupEmail />} />
                <Route
                    path="/signup/password"
                    element={
                        <RequireEmail>
                            <SignupPassword />
                        </RequireEmail>
                    }
                />
                <Route path="/login" element={<Login />} />
>>>>>>> 1607eb8460db0dc14ce9390839a5ceee80d408eb
            </Routes>
            {/* <Dashboard/> */}
            <CreateSurvey />
        </div>
    );
}

export default App;
