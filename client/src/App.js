import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignupEmail from './Components/SignupEmail';
import SignupPassword from './Components/SignupPassword';
// import Dashboard  from "./Pages/Dashboard"
import RequireEmail from './Hoc/RequireEmail';
<<<<<<< HEAD
import Navbar2 from "./Components/Navbar2/Navbar2"
=======
import CreateSurvey from "./Components/CreateSurvey";

>>>>>>> 3ca6b25176317b9d4f04038b3a9f59e61baef6e8
function App() {
    return (
        <div className="App">
             <Routes>
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
<<<<<<< HEAD
            </Routes> 
             {/* <Dashboard/> */}
             {/* <Navbar2/> */}
=======
            </Routes>
            {/* <Dashboard/> */}
            {/* <CreateSurvey /> */}
>>>>>>> 3ca6b25176317b9d4f04038b3a9f59e61baef6e8
        </div>
    );
}

export default App;
