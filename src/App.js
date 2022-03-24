import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';


//components
import UserSignUpForm from './components/UserSignUpForm';
import UserLoginForm from './components/UserLoginForm';
import WelcomePage from './pages/WelcomePage';
import UserSignUpSuccess from './pages/UserSignUpSuccess';

function App() {
    const [hasSignUp, setHasSignUp] = useState(false);
    const [hasLoggedIn, setHasLoggedIn] = useState(false); 

    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='log-in-form' element={<UserLoginForm />} />
                <Route
                    path='sign-up-form'
                    element={
                        hasSignUp
                            ? <UserSignUpSuccess setHasSignUp={setHasSignUp} />
                            : <UserSignUpForm setHasSignUp={setHasSignUp} />
                    }
                />

            </Routes>
        </Router>
    );
}

export default App;
