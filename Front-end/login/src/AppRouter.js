import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import Home from "./pages/home";
import Register from "./pages/register";
import RecoverPassword from "./pages/recoverpassword";
import PlacesPeople from "./pages/placespeople"; //tenemos error
import Actions from "./pages/actions";
import Food from "./pages/food";
import Animals from "./pages/animals";
import School from "./pages/School";
import Bathroom from "./pages/bathroom";
import House from "./pages/house";

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<Home/>}/> 
                <Route path="/register" element={<Register/>}/>
                <Route path="/recover-password" element={<RecoverPassword/>}/>
                <Route peth="/places-people" element={<PlacesPeople/>}/>
                <Route path="/actions" element={<Actions/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/animals" element={<Animals/>}/>
                <Route path="/school" element={<School/>}/>
                <Route path="/bathroom" element={<Bathroom/>}/>
                <Route path="/house" element={<House/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;