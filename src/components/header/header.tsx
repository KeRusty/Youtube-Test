import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss'

function Header() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        localStorage.removeItem("videoUrl");
        navigate('/')
    }

    const navigateToVideo = () => {
        const videoUrl = localStorage.getItem("videoUrl");
        if (videoUrl && videoUrl.length > 0) {
            navigate('/video')
        } else {
            window.alert('Oops this does not seem to be a valid Youtube URL, try again')
        }
    }
    return (
        <div className='header-container'>
            <div className='header-text-container'>
                <h3 className='header-text' onClick={navigateToHome}>YOUTUBE PLAYER</h3>
            </div>
            <div className='header-sub-text-container'>
                <p className='header-text' onClick={navigateToVideo}>Video</p>
                <p className='header-text' onClick={() => navigate('/gifs')}>GIFs</p>
            </div>
        </div>
    )
}
export default Header;