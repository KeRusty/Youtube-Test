import React, { ReactElement, useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { useNavigate, useLocation } from "react-router-dom";
import { SourceProps } from 'react-player/base';
import './styles.scss'

// helpers
import { isYouTubeLink } from '../../utils/helpers/helpers';

function Video(): ReactElement | null {
    const navigate = useNavigate();
    const location = useLocation();

    const [videoURL, setVideoURL] = useState<string | string[] | SourceProps[] | MediaStream | undefined>('');
    const [position, setPosition] = useState<number>(parseFloat(localStorage.getItem("videoPosition") || "0"));

    const handleProgress = (state: { playedSeconds: number }) => {
        localStorage.setItem("videoPosition", state.playedSeconds.toString());
    };

    useEffect(() => {
        console.log('useEffect')
        const isCorrectURL = isYouTubeLink(location?.state?.videoURL);
        console.log('isCorrectURL', isCorrectURL)

        if (isCorrectURL) {
            setVideoURL(location?.state?.videoURL)
        } else {
            setVideoURL('https://www.youtube.com/watch?v=63EAJJakvEU&ab_channel=IliaTS')
        }

    }, [location?.state]);

    return (
        <div className="video-container">
            <div className='video-player-container'>
                <ReactPlayer
                    url={videoURL}
                    playing={false}
                    controls
                    onProgress={handleProgress}
                    progressInterval={1000}
                    width="80%"
                    height="60vh"
                />
            </div>

            <div className='video-player-button-container'>
                <button className="watch-button" onClick={() => navigate("/")}>Edit</button>
                <button className="watch-button" onClick={() => navigate("/gif")}>Go to GIF</button>
            </div>

        </div>
    )
}

export default Video;