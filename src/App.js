import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


//components
import UserSignUpForm from './components/UserSignUpForm'; 
import UserLoginForm from './components/UserLoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='log-in' element={<UserLoginForm />} />
        <Route path='sign-up' element={<UserSignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
