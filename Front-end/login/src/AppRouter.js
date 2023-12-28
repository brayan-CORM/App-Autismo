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
                <Route path="/Home" element={<Home/>}/> 
                <Route path="/Register" element={<Register/>}/>
                <Route path="/RecoverPassword" element={<RecoverPassword/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;