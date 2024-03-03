import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import RecoverPassword from "./Pages/recoverpassword";
import Actions from "./Pages/actions";
import Food from "./Pages/food";
import Feelings from "./Pages/feelings";
import Hygiene from "./Pages/hygiene";
import People from "./Pages/people";
import ResetPassword from "./Pages/resetpassword";
import Calendar from "./Pages/calendar";
import NewPage from "./components/NewPage";

const AppRouter = ({ location }) => {
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [sessionToken, setSessionToken] = useState(
    sessionStorage.getItem("sessionToken")
  ); // Estado del token de sesión
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  useEffect(() => {
    // Verificar si hay un token de sesión almacenado en sessionStorage
    const storedToken = sessionStorage.getItem("sessionToken");
    if (storedToken) {
      // Si hay un token de sesión, establecer el estado del token
      setSessionToken(storedToken);
    }
  }, []);

  const handleLogin = async ({ _identifier, _password }) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _identifier, _password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Establecer el token de sesión en sessionStorage y el estado del token
        sessionStorage.setItem("sessionToken", data.token);
        setSessionToken(data.token);
        console.log("Token guardado en sessionStorage:", data.token); // Agregar esta línea de registro
        return true;
      } else {
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Limpiar el token de sesión al hacer logout
    sessionStorage.removeItem("sessionToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes location={location}>
        <Route path="/" element={<App handleLogin={handleLogin} />} />
        {/* 
          Usar isLoading para mostrar un indicador de carga mientras se autentica 
          y isAuthenticated para redirigir una vez que la autenticación esté completa
        */}
        <Route
          path="/acciones"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Actions />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/calendar"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Calendar />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/:categoryName"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <NewPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Deseos y sentimientos"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Feelings />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Alimentos"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Food />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Home />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Higiene"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <Hygiene />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Personas"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : sessionToken ? (
              <People />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/reset-password/:resetId" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
