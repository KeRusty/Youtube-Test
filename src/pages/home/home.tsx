import React, { ReactElement, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss'

function Home(): ReactElement | null {
    const [inputUrl, setInputUrl] = useState<string>("");
    const navigate = useNavigate();

    const handleSave = () => {
        localStorage.setItem("videoPosition", "0");
        navigate('/video', { state: { videoUrl: inputUrl } });
    };

    return (
        <div className="home-container">
            <div className='textbox-container'>
                <input
                    type="text"
                    placeholder="YouTube Video URL"
                    className="text-box"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                />
            </div>

            <div className=''>

                <button className="watch-button" onClick={handleSave}>
                    Watch Video
                </button>
            </div>

        </div>
    );
}

export default Home;