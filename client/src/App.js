import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupEmail from './Components/SignupEmail';
import SignupPassword from './Components/SignupPassword';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/signup/email" element={<SignupEmail />} />
                <Route path="/signup/password" element={<SignupPassword />} />
            </Routes>
        </div>
    );
}

export default App;
