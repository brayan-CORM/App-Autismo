import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import Home from "./pages/home";
import Register from "./pages/register";
import RecoverPassword from "./pages/recoverpassword";

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<Home/>}/> 
                <Route path="/register" element={<Register/>}/>
                <Route path="/recover-password" element={<RecoverPassword/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;