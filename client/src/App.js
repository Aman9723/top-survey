import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignupEmail from './Components/SignupEmail';
import SignupPassword from './Components/SignupPassword';

import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';

// import Dashboard  from "./Pages/Dashboard"
import RequireEmail from './Hoc/RequireEmail';
import CreateSurvey from "./Components/CreateSurvey";


function App() {
    return (
        <div className="App">
            {/* hello */}

            {/* <Homepage/>+ */}
            <AllRoutes/>
         
            {/* <Dashboard/> */}
            {/* <CreateSurvey /> */}
        </div>
    );
}

export default App;
