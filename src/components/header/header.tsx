import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss'

function Header() {
    const navigate = useNavigate();
    return (
        <div className='header-container' onClick={() => navigate('/')}>
            <div className='header-text-container'>
                <h2 className='header-text'>YOUTUBE PLAYER</h2>
            </div>
        </div>
    )
}
export default Header;