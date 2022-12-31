import React from 'react';
import Login from './Views/Login';
import Signup from './Views/SignUp';
import Homepage from './Views/Homepage';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/homepage'
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
