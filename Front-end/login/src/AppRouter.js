import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/Home" element={<Home/>}/> 
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;