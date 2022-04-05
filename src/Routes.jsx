import React from 'react';
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Teams from "./pages/Teams";


const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/code-challenger--ibti-solutions/" element={<Teams/>}/>
            <Route path="/code-challenger--ibti-solutions/create" element={<Create/>}/>
        </Routes>
     );
}
 
export default MainRoutes;