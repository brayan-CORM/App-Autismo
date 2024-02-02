import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            </Routes>
        </Router>
    );
}

export default AppRouter;