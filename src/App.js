import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';


//components
import UserSignUpForm from './components/UserSignUpForm';
import UserLoginForm from './components/UserLoginForm';
import WelcomePage from './pages/WelcomePage';

function App() {
    const [hasSignUp, setHasSignUp] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='log-in-form' element={<UserLoginForm />} />
                <Route path='sign-up-form' element={<UserSignUpForm />} />
            </Routes>
        </Router>
    );
}

export default App;
