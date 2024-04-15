import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='md:p-4 h-screen flex items-center justify-center'>
      <Toaster />
      <Routes>
        <Route path='/' element={!authUser ? <Navigate to="/login" /> : <Home />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> :  <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </div>
  )
}

export default App
