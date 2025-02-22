import React, { ReactElement, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss'

// helpres
import { isYouTubeLink } from '../../utils/helpers/helpers';


function Home(): ReactElement | null {
    const [inputUrl, setInputUrl] = useState<string>("");
    const navigate = useNavigate();

    const handleSave = () => {
        localStorage.setItem("videoPosition", "0");

        const isCorrectURL = isYouTubeLink(inputUrl);

        if (isCorrectURL) {
            navigate('/video', { state: { videoUrl: inputUrl } });
        } else {
            window.alert('Oops this does not seem to be a valid Youtube URL, try again')
        }

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