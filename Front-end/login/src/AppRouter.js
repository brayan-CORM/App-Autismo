import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<Home/>}/> 
                <Route path="/register" element={<Register/>}/>
                <Route path="/recover-password" element={<RecoverPassword/>}/>
                <Route path="/actions" element={<Actions/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/feelings" element={<Feelings/>}/>
                <Route path="/hygiene" element={<Hygiene/>}/>
                <Route path="/people" element={<People/>}/>
                <Route path="/reset-password/:resetId" element={<ResetPassword/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;