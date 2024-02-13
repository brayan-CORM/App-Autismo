import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from "./App";
import Home from "./pages/home";
import Register from "./pages/register";
import RecoverPassword from "./pages/recoverpassword";
import Actions from "./pages/actions";
import Food from "./pages/food";
import Feelings from "./pages/feelings";
import Hygiene from "./pages/hygiene";
import People from "./pages/people";
import ResetPassword from "./pages/resetpassword";
import Calendar from "./pages/calendar";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async ({ _identifier, _password }) => {
    try {
      // Realizar una solicitud al servidor backend para iniciar sesión
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _identifier, _password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, establecer isAuthenticated a true
        setIsAuthenticated(true);
        return true;
      } else {
        console.log(data.msg); // Manejar mensaje de error, por ejemplo, mostrar un mensaje al usuario
        return false;
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      return false;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App handleLogin={handleLogin} />} />
        <Route path="/actions" element={isAuthenticated ? <Actions /> : <Navigate to="/" />} />
        <Route path="/calendar" element={isAuthenticated ? <Calendar /> : <Navigate to="/" />} />
        <Route path="/feelings" element={isAuthenticated ? <Feelings /> : <Navigate to="/" />} />
        <Route path="/food" element={isAuthenticated ? <Food /> : <Navigate to="/" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/hygiene" element={isAuthenticated ? <Hygiene /> : <Navigate to="/" />} />
        <Route path="/people" element={isAuthenticated ? <People /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/reset-password/:resetId" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
