import React, { ReactElement } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss'

function Gif(): ReactElement | null {
    const navigate = useNavigate();
    return (
        <div className="gif-container">
            <div className='gif-player-container'>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2FsNXFpeGliOGl5anQwcDJvazl0Y25paW90dnRvZDZ5dDJjZjJhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XreQmk7ETCak0/giphy.gif" alt="Funny GIF" className="w-80 h-80" />
            </div>

            <button className="watch-button" onClick={() => navigate("/video")}>Back</button>
        </div>
    )
}

export default Gif;