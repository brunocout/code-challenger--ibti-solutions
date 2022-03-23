import React from 'react';
import {Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Teams from "./pages/Teams";


const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Teams/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
     );
}
 
export default MainRoutes;