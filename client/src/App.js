import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupEmail from './Components/SignupEmail';
import SignupPassword from './Components/SignupPassword';
import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';

function App() {
    return (
        <div className="App">
            {/* hello */}

            {/* <Homepage/> */}
            <AllRoutes/>
            <Routes>
               

            </Routes>
        </div>
    );
}

export default App;
