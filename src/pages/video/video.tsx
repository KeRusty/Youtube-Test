import React, { ReactElement, useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import { useNavigate, useLocation } from "react-router-dom";
import { SourceProps } from 'react-player/base';
import './styles.scss'

// helpers
import { isYouTubeLink, handleProgress } from '../../utils/helpers/helpers'

function Video(): ReactElement | null {
    const navigate = useNavigate();
    const location = useLocation();
    const [position, setPosition] = useState<number>(parseFloat(localStorage.getItem("videoPosition") || "0"));

    const [videoURL, setVideoURL] = useState<string | string[] | SourceProps[] | MediaStream | undefined>('');

    const playerRef = useRef(null);

    useEffect(() => {
        const url = localStorage.getItem("videoUrl") ?? '';
        const isCorrectURL = isYouTubeLink(url ? url : '');

        if (isCorrectURL) {
            setVideoURL(url.trim())
            setPosition(parseFloat(localStorage.getItem("videoPosition") || "0"))
        } else {
            setVideoURL('https://www.youtube.com/watch?v=63EAJJakvEU&ab_channel=IliaTS')
        }

    }, [location?.state]);

    return (
        <div className="video-container">
            <div className='video-player-container'>
                <ReactPlayer
                    ref={playerRef}
                    url={videoURL}
                    playing={true}
                    controls
                    onProgress={handleProgress}
                    progressInterval={1000}
                    config={{ youtube: { playerVars: { start: position } } }} // seems to not work properly
                    width="100%"
                    height="100vh"
                />
            </div>

            <div className='video-player-button-container'>
                <button className="watch-button" onClick={() => navigate("/")}>Back</button>
            </div>

        </div>
    )
}

export default Video;