import React from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css'


const Header = ({ title, href }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(href)
    }

    return ( 
        <header className="header">
            <button onClick={handleOnClick}>{title}</button>
        </header>
     );
}
 
export default Header;