import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import Home from "./Pages/home";
import Register from "./Pages/register";
import RecoverPassword from "./Pages/recoverpassword";

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